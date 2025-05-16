---
title: 📹 yt-dlp Command Information
---

# **📹 yt-dlp Command Information**

`yt-dlp` is a command-line program to download videos from YouTube and a few more sites. It is a fork of the popular `youtube-dl` with additional features and fixes. It is widely used for its flexibility and extensive options for downloading and processing video and audio content.

For more information and to contribute to the project, visit the [yt-dlp GitHub repository](https://github.com/yt-dlp/yt-dlp).

This page provides detailed information on how to customize and use `yt-dlp` commands within the Hot Tub application, focusing on the use of the `--format` flag rather than downloading files.

## ⚙️ Custom yt-dlp Commands

Hot Tub allows users to set custom `yt-dlp` commands to enhance their video downloading experience. This feature is particularly useful for advanced users who want to tailor the command-line options to their specific needs, especially using the `--format` flag.

### 🔧 Enabling Custom Commands

To enable custom `yt-dlp` commands, you must first enable the debug tools:

1. Tap the "⚙️" button in the top left corner of the screen to open the settings menu.
2. Navigate to "General" > "Advanced" > "Debug".
3. Toggle the "Enable Debug" switch.

### 🛠️ Setting Custom Commands

Once debug tools are enabled, you can set your custom `yt-dlp` commands, focusing on the `--format` flag:

1. Go to "General" > "Advanced" > "Custom yt-dlp Commands".
2. Enter your desired command-line options in the provided field.

### 🔄 Persistence and Management

- **Persistence**: Custom commands will persist even if the debug tools are turned off.
- **Disabling**: To disable custom commands, simply delete the text in the command field.

### ⚖️ Recommended vs. Custom Commands

The app automatically uses the recommended commands provided by the server. However, you can override these by entering your custom command, particularly using the `--format` flag. This allows for flexibility and control over the downloading process.

### 💡 Example Commands

Here are some example `yt-dlp` commands you might use, emphasizing the `--format` flag:

- Stream a video in the best quality available:

  ```
  yt-dlp -f best
  ```

- Stream video in a specific resolution (e.g., 720p):

  ```
  yt-dlp -f 'bestvideo[height<=720]+bestaudio/best[height<=720]'
  ```

- Stream audio only in a specific format:

  ```
  yt-dlp -f 'bestaudio[ext=m4a]/bestaudio' --extract-audio --audio-format m4a
  ```

- Stream video with a specific codec:

  ```
  yt-dlp -f 'bestvideo[vcodec=avc1.4d401e]+bestaudio/best'
  ```

For more detailed options and configurations, refer to the official `yt-dlp` documentation.
