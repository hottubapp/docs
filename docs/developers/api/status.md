---
title: :material-server: Status Endpoint
---

## Overview

The `POST /api/status` endpoint is used to retrieve the status of the given source. It contains information about the source, channels, and other relevant information.

### Request

`POST /api/status`

```json
{
  "clientVersion": "2.1.2",
  // Your server's global options can be sent in the status request
  "sort": "new",
  "flavor": "mint chocolate chip"
}
```

!!! tip "Server Options"

    Your server's options can be used to customize the experience for the user.
    For example, you may return different categories, channels, or notices based on their preferences.

### Response

```json
{
  "id": "example-server",
  "name": "Example Video Server",
  "subtitle": "A demo video streaming service.",
  "description": "This is an example server demonstrating the Hot Tub API structure and capabilities.",
  "iconUrl": "https://example.com/icon.png",
  "color": "#007AFF",
  "status": "active",
  "notices": [
    {
      "status": "warning",
      "message": "Scheduled Maintenance",
      "details": "Our servers will undergo maintenance on January 15th from 2:00-4:00 AM UTC. Some features may be temporarily unavailable.",
      "priority": true,
      "url": null
    },
    {
      "status": "info",
      "message": "New Features Available",
      "details": "Check out our latest update with improved video quality and faster loading times!",
      "priority": false,
      "url": "https://example.com/changelog"
    }
  ],
  "channels": [
    {
      "id": "example-tube",
      "name": "Example Tube",
      "description": "A sample video channel demonstrating the API structure.",
      "premium": false,
      "favicon": "https://example.com/favicon.ico",
      "status": "active",
      "categories": ["Entertainment", "Education", "Music"],
      "options": [
        {
          "id": "quality",
          "title": "Video Quality",
          "systemImage": "video",
          "colorName": "blue",
          "multiSelect": false,
          "options": [
            {
              "id": "hd",
              "title": "HD",
              "description": "High definition videos only"
            },
            {
              "id": "any",
              "title": "Any Quality",
              "description": "Include all video qualities"
            }
          ]
        },
        {
          "id": "duration",
          "title": "Duration",
          "systemImage": "clock",
          "colorName": "orange",
          "multiSelect": true,
          "options": [
            {
              "id": "short",
              "title": "Short (< 5 min)",
              "description": "Videos under 5 minutes"
            },
            {
              "id": "medium",
              "title": "Medium (5-20 min)",
              "description": "Videos between 5-20 minutes"
            },
            {
              "id": "long",
              "title": "Long (> 20 min)",
              "description": "Videos over 20 minutes"
            }
          ]
        }
      ],
      "nsfw": false,
      "ytdlpCommand": "yt-dlp --format best",
      "cacheDuration": 1800
    }
  ],
  "nsfw": false,
  "categories": [
    "Funny",
    "Cute",
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Documentary",
    "Drama"
  ],
  "options": [
    {
      "id": "sort",
      "title": "Sort",
      "systemImage": "arrow.up.arrow.down",
      "colorName": "blue",
      "multiSelect": false,
      "options": [
        {
          "id": "new",
          "title": "New",
          "description": "Sort the videos by newest first."
        },
        {
          "id": "likes",
          "title": "Most Liked",
          "description": "Sort the videos by likes."
        }
      ]
    }
  ],
  "popup": null,
  "filtersFooter": "Help us improve our algorithms by selecting the categories that best describe you. These will not necessarily affect your search results, but will help us tailor the app to your interests."
}
```

## Field Reference

### ServerStatus Object

| Field           | Type              | Required | Description                                 |
| --------------- | ----------------- | -------- | ------------------------------------------- |
| `id`            | `string`          | ✅       | Unique server identifier                    |
| `name`          | `string`          | ✅       | Server display name                         |
| `subtitle`      | `string`          | ⚪       | Brief server description                    |
| `description`   | `string`          | ⚪       | Detailed server description                 |
| `iconUrl`       | `string`          | ⚪       | Server icon/logo URL                        |
| `color`         | `string`          | ⚪       | Brand color (hex code or Swift color names) |
| `status`        | `ChannelStatus`   | ⚪       | Server operational status                   |
| `notices`       | `Notice[]`        | ⚪       | Status notices/alerts                       |
| `channels`      | `Channel[]`       | ⚪       | Available content channels                  |
| `nsfw`          | `boolean`         | ⚪       | Whether server contains adult content       |
| `categories`    | `string[]`        | ⚪       | Available content categories                |
| `options`       | `ChannelOption[]` | ⚪       | Global server options                       |
| `filtersFooter` | `string`          | ⚪       | Footer text for filter UI                   |

### Channel Object

| Field           | Type              | Required | Description                                                                  |
| --------------- | ----------------- | -------- | ---------------------------------------------------------------------------- |
| `id`            | `string`          | ✅       | Unique channel identifier                                                    |
| `name`          | `string`          | ✅       | Channel display name                                                         |
| `favicon`       | `string`          | ✅       | Channel favicon URL                                                          |
| `status`        | `ChannelStatus`   | ✅       | Channel operational status                                                   |
| `categories`    | `string[]`        | ✅       | Channel content categories                                                   |
| `options`       | `ChannelOption[]` | ✅       | Channel-specific options                                                     |
| `premium`       | `boolean`         | ⚪       | Whether channel requires premium                                             |
| `description`   | `string`          | ⚪       | Channel description                                                          |
| `nsfw`          | `boolean`         | ⚪       | Whether channel contains adult content                                       |
| `ytdlpCommand`  | `string`          | ⚪       | Custom yt-dlp command                                                        |
| `cacheDuration` | `number`          | ⚪       | Cache duration in seconds: Yt-Dlp will re-extract video details when expired |

### Notice Object

| Field      | Type      | Required | Description                                               |
| ---------- | --------- | -------- | --------------------------------------------------------- |
| `status`   | `string`  | ✅       | Notice type ("success", "info", "error", "warning", etc.) |
| `message`  | `string`  | ⚪       | Notice title/message                                      |
| `details`  | `string`  | ⚪       | Detailed notice description                               |
| `priority` | `boolean` | ⚪       | Whether to display prominently on home page               |
| `url`      | `string`  | ⚪       | Action URL for the notice                                 |

### ChannelOption Object

| Field         | Type                      | Required | Description                              |
| ------------- | ------------------------- | -------- | ---------------------------------------- |
| `id`          | `string`                  | ✅       | Unique option identifier                 |
| `title`       | `string`                  | ✅       | Option display title                     |
| `options`     | `ChannelOptionChoice[]`   | ✅       | Available choices for this option        |
| `systemImage` | `string`                  | ⚪       | SF Symbol name for option icon           |
| `colorName`   | `string`                  | ⚪       | Swift color name for theming             |
| `multiSelect` | `boolean`                 | ⚪       | Whether multiple choices can be selected |
| `value`       | `string\|number\|boolean` | ⚪       | Current option value                     |

### ChannelOptionChoice Object

| Field         | Type              | Required | Description                                       |
| ------------- | ----------------- | -------- | ------------------------------------------------- |
| `id`          | `string`          | ✅       | Unique choice identifier                          |
| `title`       | `string`          | ✅       | Choice display title                              |
| `description` | `string`          | ⚪       | Choice description                                |
| `options`     | `ChannelOption[]` | ⚪       | Nested options shown when this choice is selected |

### ChannelStatus Enum

| Value         | Description                                 |
| ------------- | ------------------------------------------- |
| `active`      | Channel is working normally                 |
| `inactive`    | Channel deliberately disabled/suspended     |
| `degraded`    | Channel working with reduced functionality  |
| `maintenance` | Channel temporarily down for planned work   |
| `offline`     | Channel unavailable due to technical issues |
| `deprecated`  | Channel scheduled for removal               |
| `testing`     | Channel is in testing mode for development  |

!!! tip "Implementation Notes"

    - Only `id` and `name` are truly required for ServerStatus
    - Channels require `id`, `name`, `favicon`, `status`, `categories`, and `options`
    - Options create hierarchical filter UIs - choices can have nested options
    - `priority` notices appear on the home page, others only on lock screen
    - Colors support both hex codes (`#FF0000`) and Swift color names (`purple`)

!!! info "Popup System"

    The popup system allows servers to display onboarding flows, age verification, preferences, and other modal content. Here's an example multi-page onboarding popup:

    ```json
    {
      "popup": {
        "id": "onboarding",
        "pages": [
          {
            "id": "ageVerification",
            "title": "Welcome to",
            "subtitle": "Example Server",
            "warning": "⚠️ Adult Content Warning",
            "body": "This source contains adult content. You must be 18 years or older to use it. By continuing, you confirm that you meet this requirement and agree to use the app responsibly.",
            "items": [
              {
                "type": "section",
                "title": "Age Verification",
                "items": [
                  {
                    "type": "toggle",
                    "id": "termsToggle",
                    "title": "I am over 18 years of age",
                    "systemImage": "checkmark.seal.fill",
                    "color": "gray",
                    "state": false
                  }
                ]
              }
            ],
            "actions": [
              {
                "title": "Continue",
                "systemImage": "arrow.right.circle.fill",
                "color": "blue",
                "actionType": "next",
                "enabledBy": "termsToggle"
              }
            ]
          },
          {
            "id": "preferences",
            "title": "Choose your Preferences",
            "subtitle": "Personalize Your Experience",
            "body": "Select the type of content you'd like to explore. This can be changed later in the filters menu.",
            "items": [
              {
                "type": "custom",
                "view": "ServerFiltersView"
              }
            ],
            "actions": [
              {
                "title": "Continue",
                "systemImage": "arrow.right.circle.fill",
                "color": "blue",
                "actionType": "next"
              }
            ]
          }
        ]
      }
    }
    ```

    **Popup Features:**

    - **Multi-page flows** - Create step-by-step onboarding experiences
    - **Conditional actions** - Use `enabledBy` to require toggle states before proceeding
    - **Custom views** - Embed specialized UI like `ServerFiltersView` for complex interactions
    - **Rich content** - Support for titles, subtitles, warnings, body text, and actions
    - **Interactive controls** - Toggles, buttons, and sections for user input
