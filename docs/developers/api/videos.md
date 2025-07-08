---
title: :material-server: Videos Endpoint
---

## Overview

The `POST /api/videos` endpoint is used to retrieve videos from the given source. It contains information about the videos, channels, and other relevant information.

### Request

`POST /api/videos`

```json
{
  "query": "kittens",
  "channel": "youtube",
  "sort": "new",
  "page": 1,
  // Your server's custom parameters will be added here
  "flavor": "mint chocolate chip"
}
```

### Response

```json
{
  "pageInfo": {
    "hasNextPage": true,
    "recommendations": ["cats", "pets", "animals"],
    "error": null, // e.g. "No results were found"
    "message": null, // e.g. "Showing cached results" or "Some content filtered based on preferences"
    "parameters": {
      "totalResults": 1000
    }
  },
  "items": [
    {
      "id": "c85017ca87477168d648727753c4ded8a35f173e22ef93743e707b296becb299",
      "title": "20 Minutes of Adorable Kittens   BEST Compilation",
      "url": "https://www.youtube.com/watch?v=y0sF5xhGreA",
      "duration": 110,
      "channel": "youtube",
      "thumb": "https://i.ytimg.com/vi/y0sF5xhGreA/hqdefault.jpg",
      "views": 14622653,
      "rating": 95,
      "uploader": "The Pet Collective",
      "uploaderUrl": "https://www.youtube.com/@petcollective",
      "verified": false,
      "tags": ["cats", "kittens", "pets"],
      "categories": ["Animals", "Entertainment"],
      "uploadedAt": "2025-01-03T10:15:54.000Z",
      // Optional fields
      "preview": "https://example.com/preview.mp4",
      "uploaderId": "petcollective",
      "aspectRatio": 1.78,
      "formats": [
        {
          "url": "https://www.youtube.com/watch?v=y0sF5xhGreA",
          "quality": 1080,
          "format": "mp4",
          "format_id": "mp4-1080",
          "protocol": "m3u8_native",
          "video_ext": "mp4",
          "http_headers": {
            "Referer": "https://www.youtube.com"
          }
        }
      ],
      "embed": {
        "source": "https://www.youtube.com/watch?v=y0sF5xhGreA",
        "html": "<iframe src='...' width='560' height='315'></iframe>",
        "width": 560,
        "height": 315
      }
    }
  ]
}
```

## Field Reference

### PageInfo Object Fields

| Field             | Type       | Required | Description                                            |
| ----------------- | ---------- | -------- | ------------------------------------------------------ |
| `hasNextPage`     | `boolean`  | ✅       | Whether more results are available                     |
| `recommendations` | `string[]` | ⚪       | Suggested search terms                                 |
| `error`           | `string`   | ⚪       | Error message (e.g., "No results were found")          |
| `message`         | `string`   | ⚪       | Informational message (e.g., "Showing cached results") |
| `parameters`      | `object`   | ⚪       | Additional metadata (e.g. `"cursor": "abc123"`)        |

!!! info "Error vs Message"

    - **`error`**: Use for actual errors that prevent normal operation (no results, API failure, invalid query)
    - **`message`**: Use for informational notices that don't indicate failure (cached results, filtered content, rate limiting info, feature announcements)

### Video Object Fields

| Field         | Type                          | Required | Description                                              |
| ------------- | ----------------------------- | -------- | -------------------------------------------------------- |
| `title`       | `string`                      | ✅       | Video title                                              |
| `url`         | `string`                      | ✅       | Video source URL                                         |
| `duration`    | `number`                      | ✅       | Video length in seconds                                  |
| `channel`     | `string`                      | ✅       | Source channel/platform identifier                       |
| `thumb`       | `string`                      | ✅       | Thumbnail image URL                                      |
| `id`          | `string`                      | ⚪       | Unique video identifier (auto-generated if not provided) |
| `views`       | `number`                      | ⚪       | View count                                               |
| `rating`      | `number`                      | ⚪       | Video percent rating score                               |
| `uploader`    | `string`                      | ⚪       | Content creator name                                     |
| `uploaderUrl` | `string`                      | ⚪       | Creator's profile URL                                    |
| `verified`    | `boolean`                     | ⚪       | Whether the uploader is verified                         |
| `tags`        | `string[]`                    | ⚪       | Array of content tags                                    |
| `categories`  | `string[]`                    | ⚪       | Array of content categories                              |
| `uploadedAt`  | <code>Date&#124;String</code> | ⚪       | Upload date (flexible format)                            |
| `preview`     | `string`                      | ⚪       | Preview GIF/video URL                                    |
| `formats`     | `Format[]`                    | ⚪       | Video format array                                       |
| `uploaderId`  | `string`                      | ⚪       | Unique uploader identifier                               |
| `aspectRatio` | `number`                      | ⚪       | Video aspect ratio (e.g., 1.78 for 16:9)                 |
| `embed`       | `EmbedData`                   | ⚪       | Embed data for Reddit-style content                      |

### Format Object Fields

| Field                | Type     | Required       | Description                                                                      |
| -------------------- | -------- | -------------- | -------------------------------------------------------------------------------- |
| `url`                | `string` | ✅             | Direct video stream URL                                                          |
| `format_id`          | `string` | Auto-generated | Format identifier (provided or auto-generated)                                   |
| `ext`                | `string` | ⚪             | File extension ("mp4", "webm")                                                   |
| `protocol`           | `string` | ⚪             | Stream protocol ("https", "m3u8_native") - important for playback                |
| `http_headers`       | `object` | ⚪ (🔑 CDN)    | Required headers for CDN authentication                                          |
| `height`             | `number` | ⚪ (📱 UX)     | Video height in pixels (240, 480, 720, 1080) - recommended for better format IDs |
| `width`              | `number` | ⚪             | Video width in pixels                                                            |
| `resolution`         | `string` | ⚪             | Resolution string ("720p" or "1280x720")                                         |
| `format`             | `string` | ⚪             | Format description                                                               |
| `fps`                | `number` | ⚪             | Frames per second                                                                |
| `quality`            | `number` | ⚪             | yt-dlp quality score (fallback for format_id generation)                         |
| `vcodec`             | `string` | ⚪             | Video codec ("avc1.640020", "h264")                                              |
| `acodec`             | `string` | ⚪             | Audio codec ("mp4a.40.2", "aac")                                                 |
| `tbr`                | `number` | ⚪             | Total bitrate                                                                    |
| `abr`                | `number` | ⚪             | Audio bitrate                                                                    |
| `vbr`                | `number` | ⚪             | Video bitrate                                                                    |
| `dynamic_range`      | `string` | ⚪             | Dynamic range ("SDR", "HDR")                                                     |
| `aspect_ratio`       | `number` | ⚪             | Video aspect ratio                                                               |
| `filesize`           | `number` | ⚪             | File size in bytes                                                               |
| `language`           | `string` | ⚪             | Audio language                                                                   |
| `container`          | `string` | ⚪             | Container format                                                                 |
| `downloader_options` | `object` | ⚪             | Download configuration (defaults to 1MB chunks)                                  |

!!! warning "CDN Authentication"

    Many premium/CDN streams require `http_headers` for authentication. Common headers include:

    - `User-Agent` - Required by most CDNs
    - `Referer` - Required for hotlink protection
    - `Accept`, `Accept-Language` - For content negotiation

!!! info "Format ID Generation"

    If `format_id` is not provided, it's auto-generated in this order:

    1. `{format}_{height}p` (e.g., "mp4_720p")
    2. `{format}_{resolution}` (e.g., "mp4_1280x720")
    3. `{format}_{quality}` (e.g., "mp4_2.5")
    4. `{format}` only

!!! tip "Best Practices"

    - Only `url` is truly required - everything else is optional
    - Include `height` for meaningful format IDs and better user experience
    - Add `http_headers` for CDN streams that need authentication
    - Providing `formats` bypasses yt-dlp extraction (faster response)
    - Providing `preview` avoids on-device preview generation
