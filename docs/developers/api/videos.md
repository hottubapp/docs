---
title: :material-server: Videos Endpoint
---

# :material-movie: Videos Endpoint

## Overview

The `POST /api/videos` endpoint is used to retrieve videos from the given source. It contains information about the videos, channels, and other relevant information.

### Request

`POST /api/videos/popular`
`POST /api/videos/search`

```
{
  "channel": "youtube",
  "sort": "new",
  "query": "kittens",
  "page": 1,
  "perPage": 10
}
```

### Response

```json
{
  "pageInfo": {
    "hasNextPage": true,
    "resultsPerPage": 10
  },
  "items": [
    {
      "duration": 110,
      "views": 14622653,
      "rating": 0,
      "id": "c85017ca87477168d648727753c4ded8a35f173e22ef93743e707b296becb299",
      "title": "20 Minutes of Adorable Kittens   BEST Compilation",
      "url": "https://www.youtube.com/watch?v=y0sF5xhGreA",
      "channel": "youtube",
      "network": "youtube",
      "thumb": "https://i.ytimg.com/vi/y0sF5xhGreA/hqdefault.jpg",
      "uploader": "The Pet Collective",
      "uploaderUrl": "https://www.youtube.com/@petcollective",
      "verified": false,
      "tags": [],
      "uploadedAt": 1741142954
    },
    {
      "duration": 869,
      "views": 5294,
      "rating": 0,
      "id": "a867c7478b16ab1139475edf4fabe5898ad825e358469e1d4396ca9e2986bb8b",
      "title": "The three Charo kitten brothers are very close and always together",
      "url": "https://www.youtube.com/watch?v=hD48qDOTyTs",
      "channel": "youtube",
      "network": "youtube",
      "thumb": "https://i.ytimg.com/vi/hD48qDOTyTs/hqdefault.jpg",
      "uploader": "Lazy Kitten",
      "uploaderUrl": "https://www.youtube.com/@lazykitten00",
      "verified": false,
      "tags": [],
      "uploadedAt": 1741142954
    }
  ]
}
```
