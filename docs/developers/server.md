---
title: :material-server: Server
---

## Overview

Hot Tub enables you to host your own video content. It is a self-contained application that can be deployed on a server or a local machine.

We've published a typescript package on [NPM](https://www.npmjs.com/package/@hottubapp/core) for your convenience, containing types, models, and utils to help you get started. Additionally we have an [example source on github.](https://github.com/hottubapp/mock-api)

```
/api
|—— status (POST)
|
|—— videos (POST)
|
|—— subscription (POST)
|
|—— channels (POST)
|
|—— auth (POST)

```

## URL Scheme

Hot Tub supports a custom URL scheme so users can easily add your source to the app at the tap of a button.

```
hottub://source?url=[source url]
```

!!! info "URL Scheme"

    When adding a source, the app will ping your server's `api/status` endpoint in order to validate the source.

## Glossary

### Status

The Status object contains the outline of the server. It describes:

- Server identification (ID, name, image)
- Available channels and their specific filter options
- Global filters - preferences that apply to channels on the source.
- Current notices - messages displayed to users with varying priority levels

### Channels

Channels represent different categories of videos available on your source. They help organize content into logical groupings that users can browse and filter.

### Notices

Messages displayed to users with varying priority levels:

- **Regular Notices**: Low-priority update messages shown on the lockscreen
- **Priority Notice**: A single high-priority message that appears on the home page
