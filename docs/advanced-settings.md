---
title: 🛠️ Advanced Settings
# hero:
#   - assets/hero.jpg

# hide:
#   - toc
#   - navigation

# template: home.html
---

Hot Tub has a few advanced settings that you can use to customize your experience.

## 🛡️ Proxy

Hot Tub supports proxying requests. This is useful for optimizing connectivity for a more stable video playback experience, particularly in regions with unreliable network performance. This is similar to how content delivery networks (CDNs) improve media delivery.

To enable proxying, tap the "⚙️" button in the top left corner of the screen. This will open the settings menu. Navigate to the "General" > "Advanced" > "Proxy" and toggle the "Enable Proxy" switch.

You can then enter the proxy server details in the format `hostname:port:username:password`. For example, if your proxy server is located at `proxy.example.com`, listening on port `8080`, with a username of `user` and a password of `pass`, you would enter:

```
proxy.example.com:8080:user:pass
```

If your proxy server does not require authentication, you can leave the username and password fields empty.

```
proxy.example.com:8080
```

## 🔄 URL Replacement

Hot Tub supports URL replacement. This feature is useful for customizing localization preferences, such as preferring a .co.uk version of a site instead of .com, improving accessibility for international users.

To enable URL replacement, tap the "⚙️" button in the top left corner of the screen. This will open the settings menu. Navigate to the "General" > "Advanced" > "URL Replacement" and enter the url you want to replace and the url you want to replace it with.

You can then enter the URL replacement rules in the format by setting the old url and the new url. For example, if you want to replace all instances of `example.com` with `example.co.uk`, you would enter:

```
From URL: example.com
To URL: example.co.uk
```

## 🗄️ Cache

Hot Tub optimizes your browsing experience by caching data and resources. This means that when you watch a video, the metadata is stored on your device. This allows for faster loading times and a better user experience.

!!! warning "Some sites may not work as expected when cached content is used, as urls may expire or change."

## 🐞 Debug

Hot Tub has a debug mode that is useful for developers and testers alike. This mode will enable verbose logging and detailed error reporting, and popup alerts when errors or events occur.

To enable debug mode, tap the "⚙️" button in the top left corner of the screen. This will open the settings menu. Navigate to the "General" > "Advanced" > "Debug" and toggle the "Enable Debug" switch.
