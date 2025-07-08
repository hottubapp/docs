---
title: :material-link: URL Schemes
---

## Overview

Hot Tub supports custom URL schemes that allow developers to integrate with the app and provide seamless user experiences. These URL schemes can be used in web pages, other apps, or server responses to trigger specific actions in Hot Tub.

## URL Scheme Format

All Hot Tub URL schemes follow this format:

```
hottub://[action]?[parameters]
```

## Available URL Schemes

### 📦 Add Source

Direct users to add your video source to their Hot Tub app:

```
hottub://source?url=https://api.example.com
```

!!! tip "Web Redirect Service"

    For platforms like Discord or Slack which don't support custom URL schemes, Hot Tub provides a web redirect service.

    ```
    https://hottubapp.io/add/{source_url}
    ```

    **Example:**
    ```
    https://hottubapp.io/add/api.example.com
    ```

    This automatically redirects to `hottub://source?url=https://api.example.com` when opened on devices with Hot Tub installed.

### 🌎 Open Web Page

Open a web page within Hot Tub's built-in browser:

```
hottub://webview?url=https://example.com/help
```

### 🔎 Trigger Search

Pre-fill the search field with a query:

```
hottub://search?q=nature documentaries
```

### 📺 Play Video

Direct playback of a specific video:

```
hottub://play?video=https://example.com/watch/12345
```

### 🔔 Show Notification

Display an in-app toast notification:

```
hottub://notification?type=info&title=Welcome&message=Thanks for using our service!
```

### 🛠 Debug Message

Show content in Hot Tub's debug view for troubleshooting and development:

```
hottub://message?content=Configuration loaded: API v2.1, 15 channels active
```

---

## Field Reference

### 📦 Source Scheme

| Parameter | Type      | Required | Description                                    |
| --------- | --------- | -------- | ---------------------------------------------- |
| `url`     | `string`  | ✅       | Your server's base URL                         |
| `privacy` | `boolean` | ⚪       | Whether to show privacy notice (default: true) |

**Example:**

```
hottub://source?url=https://api.myvideosite.com
```

!!! info "Source Validation"

    When adding a source, Hot Tub will ping your server's `/api/status` endpoint to validate it before adding.

---

### 🌎 WebView Scheme

| Parameter | Type      | Required | Description                                  |
| --------- | --------- | -------- | -------------------------------------------- |
| `url`     | `string`  | ✅       | The web page URL to open                     |
| `privacy` | `boolean` | ⚪       | Whether to use privacy mode (default: false) |

**Example:**

```
hottub://webview?url=https://help.example.com
```

---

### 🔎 Search Scheme

| Parameter | Type     | Required | Description      |
| --------- | -------- | -------- | ---------------- |
| `q`       | `string` | ✅       | The search query |

**Example:**

```
hottub://search?q=funny cats
```

---

### 📺 Play Scheme

| Parameter | Type     | Required      | Description                                 |
| --------- | -------- | ------------- | ------------------------------------------- |
| `video`   | `string` | ⚪ (Option 1) | Video page URL (will fetch details via API) |
| `url`     | `string` | ⚪ (Option 2) | Web video player URL (opens in webview)     |

!!! note "Play Options"

    Use `video` for API-based videos that will fetch full details, or `url` for web-based video players (opens in webview).

**Examples:**

```
# Opens the video in a native video player
hottub://play?video=https://www.youtube.com/watch?v=y0sF5xhGreA

# Opens the video in a web view player
hottub://play?url=https://www.youtube.com/watch?v=y0sF5xhGreA
```

---

### 🔔 Notification Scheme

| Parameter | Type     | Required | Description                                        |
| --------- | -------- | -------- | -------------------------------------------------- |
| `type`    | `string` | ⚪       | Toast type ("info", "success", "warning", "error") |
| `title`   | `string` | ⚪       | Notification title                                 |
| `message` | `string` | ⚪       | Notification message                               |

**Examples:**

```
hottub://notification?type=success&title=Success&message=Video added to playlist!
hottub://notification?type=error&title=Error&message=Failed to load video
```

---

### 🛠 Debug Message Scheme

| Parameter | Type     | Required | Description                                  |
| --------- | -------- | -------- | -------------------------------------------- |
| `content` | `string` | ✅       | Message text or URL to display in debug view |

**Use Cases:**

- **Configuration info** - Server settings, user preferences, app state
- **API responses** - Raw JSON/data for debugging
- **URLs** - Clickable links for testing endpoints
- **User data** - Display user info for troubleshooting
- **App diagnostics** - Version info, device details, etc.

**Examples:**

```
hottub://message?content=Server Status: API v2.1.3, 15 channels active, 1,203 users online
hottub://message?content=https://api.example.com/debug/user/12345
hottub://message?content=User Config: Premium=true, NSFW=false, Quality=1080p
```

---

## Complete Reference

### All Available URL Schemes

| Scheme                  | Purpose            | Required Parameters | Optional Parameters        |
| ----------------------- | ------------------ | ------------------- | -------------------------- |
| `hottub://source`       | Add video source   | `url`               | `privacy`                  |
| `hottub://webview`      | Open web page      | `url`               | `privacy`                  |
| `hottub://search`       | Trigger search     | `q`                 | -                          |
| `hottub://play`         | Play video         | `video` OR `url`    | -                          |
| `hottub://notification` | Show in-app alert  | -                   | `type`, `title`, `message` |
| `hottub://message`      | Show debug content | `content`           | -                          |

### Parameter Types

| Parameter | Type      | Values                                | Description                                 |
| --------- | --------- | ------------------------------------- | ------------------------------------------- |
| `url`     | `string`  | Valid URL                             | Web address (auto-adds https:// if missing) |
| `privacy` | `boolean` | `true`, `false`                       | Shows Hot Tub's lock screen if `true`       |
| `type`    | `string`  | `info`, `success`, `warning`, `error` | Toast notification style                    |
| `title`   | `string`  | Any text                              | Notification title                          |
| `message` | `string`  | Any text                              | Notification message                        |
| `content` | `string`  | Text or URL                           | Content to display in debug view            |
| `q`       | `string`  | Any text                              | Search query                                |
| `video`   | `string`  | Valid URL                             | Video page URL for API fetching             |

### Web Redirect URLs

| URL Format                  | Equivalent URL Scheme                  |
| --------------------------- | -------------------------------------- |
| `hottubapp.io/add/{domain}` | `hottub://source?url=https://{domain}` |

## Implementation Examples

### HTML Integration

Add Hot Tub support to your website:

```html
<!-- Custom URL Scheme (works on devices with Hot Tub) -->
<a href="hottub://source?url=https://api.myvideosite.com" class="add-to-hottub-btn">
  📺 Add to Hot Tub
</a>

<!-- Web Redirect (works everywhere, including Discord) -->
<a href="https://hottubapp.io/add/api.myvideosite.com" class="add-to-hottub-btn-web">
  📺 Add to Hot Tub
</a>

<!-- Play video -->
<a href="hottub://play?video=https://mysite.com/video/123"> ▶️ Watch in Hot Tub </a>

<!-- Debug info for developers -->
<a href="hottub://message?content=API Response: 200 OK, 15 videos returned"> 🛠 Debug Info </a>
```

### JavaScript Integration

Trigger different URL schemes from web pages:

```javascript
// Show success notification
function showNotification(type, title, message) {
  const url = `hottub://notification?type=${type}&title=${encodeURIComponent(title)}&message=${encodeURIComponent(message)}`;
  window.location.href = url;
}

// Show debug information
function showDebugInfo(info) {
  const url = "hottub://message?content=" + encodeURIComponent(info);
  window.location.href = url;
}

// Example usage
showNotification("success", "Success", "Video added to playlist!");
showDebugInfo("API Status: Connected, Last sync: 2 minutes ago");
```

### Discord/Social Media Sharing

Use web redirects for platforms that don't support custom schemes:

```
Share this link: https://hottubapp.io/add/api.myvideosite.com
```

### QR Code Integration

Generate QR codes for easy mobile access:

```
hottub://source?url=https://api.myvideosite.com
```

### Server Response Integration

Include URL schemes in your API responses:

```json
{
  "notices": [
    {
      "status": "info",
      "message": "Need Help?",
      "details": "Visit our help center for assistance.",
      "url": "hottub://webview?url=https://help.example.com"
    },
    {
      "status": "success",
      "message": "Debug Available",
      "details": "View server configuration details.",
      "url": "hottub://message?content=Server: api.example.com, Version: 2.1.3, Channels: 15"
    }
  ]
}
```

!!! tip "Best Practices"

    - Use web redirects (`hottubapp.io/add/`) for Discord and social media
    - Use direct URL schemes (`hottub://`) for native apps and websites
    - Always URL-encode your parameters, especially for notification messages
    - Use appropriate notification types (`success`, `error`, `warning`, `info`) for better UX
    - Use debug messages for development/troubleshooting, not end-user content
