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
  // The app will send your server's global options in the status request.
  "sort": "new",
  "flavor": "mint chocolate chip"
}
```

!!! tip "Server Options"

    Your server's options can be used to customize the experience for the user.
    For example, you may return different categories, based on their preferences.

### Response

```json
{
  "id": "hottub",
  "name": "Hot Tub",
  "subtitle": "A better way to watch videos.",
  "description": "An elegant, native video player. Thoughtfully designed, ethically made, and free to use.",
  "iconUrl": "https://hottubapp.io/files/hottub/appicon.png",
  "color": "#A700FF", // supports hex, or swift color names
  "status": "normal",
  // Notices are displayed to the user in the app on the lock screen. Priority notices are displayed on the home page as well.
  "notices": [
    {
      "status": "info",
      "message": "Hot Tub Pro is temporarily free!",
      "details": "We're giving away Hot Tub Pro while we migrate payment processors! Enjoy it while it lasts!",
      "priority": false,
      "url": "hottub://upgrade?source=hottub"
    }
  ],
  // Channels represent the sources that will be used to fetch videos.
  // A source can have multiple channels.
  "channels": [
    {
      "id": "hottub",
      "name": "Hot Tub Pro",
      "description": "Advanced search, filters, and more. Consider supporting the development of Hot Tub by upgrading to Hot Tub Pro.",
      "premium": true,
      "favicon": "https://www.google.com/s2/favicons?sz=64&domain=https://hottubapp.io",
      "status": "active",
      "categories": [],
      "options": [
        {
          "id": "channels",
          "title": "Sites",
          "description": "Websites included in search results.",
          "systemImage": "network",
          "colorName": "purple",
          "options": [],
          "multiSelect": true
        }
      ],
      "nsfw": true
    }
  ],
  "subscription": {
    "status": "incomplete"
  },
  "nsfw": true,
  "categories": [
    "Funny",
    "Cute",
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Documentary",
    "Drama",
    "Family"
  ],
  // Global options for the source (applies to all channels)
  "options": [
    {
      "id": "sort",
      "title": "Sort",
      "description": "Sort the videos by new or old.",
      "systemImage": "sort.image",
      "colorName": "blue",
      "options": [
        {
          "id": "new",
          "title": "New",
          "description": "Sort the videos by new or old."
        },
        {
          "id": "likes",
          "title": "Likes",
          "description": "Sort the videos by likes."
        }
      ]
    },
    {
      "id": "flavor",
      "title": "Flavor",
      "description": "Your favorite flavor.",
      "systemImage": "birthday.cake.fill",
      "colorName": "pink",
      "options": [
        {
          "id": "vanilla",
          "title": "Vanilla"
        }
        {
          "id": "mint chocolate chip",
          "title": "Mint Chocolate Chip"
        },
        {
          "id": "strawberry",
          "title": "Strawberry"
        }
      ]
    }
  ],
  "filtersFooter": "Help us improve our algorithms by selecting the categories that best describe you. These will not necessarily affect your search results, but will help us tailor the app to your interests."
}
```
