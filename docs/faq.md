---
title: FAQ / Troubleshooting
# hero:
#   - assets/hero.jpg

# hide:
#   - toc
#   - navigation

# template: home.html
---

## Need Help? Join the Discord

If you have any questions or need assistance, feel free to join our Discord community! Connect with other users, share your experiences, and get help from our team.

[:fontawesome-brands-discord: Join the Discord](https://hottubapp.io/discord)

[:fontawesome-solid-envelope: Contact Us](https://hottubapp.io/contact-us)

!!! tip "Quick Search"

    Use your browser's search function (Cmd/Ctrl + F) to quickly find answers to your questions.

## Getting Started

??? question "I don't see any videos"

    If you don't see any videos, it's likely because you don't have any sources added. You can add a source by tapping the "⚙️" button in the top left corner of the screen. This will open the settings menu. Navigate to the "Sources" section and enter the URL of the source you want to add.

    As of version 2.1.2, the app no longer automatically adds a source for you. You'll need to add a source manually.

    ??? info "Adding the Hot Tub Source"

        If you are 18 years or older, you can add the Hot Tub source to browse adult content.

        [:fontawesome-solid-box: Add the Hot Tub source](hottub://source?url=hottubapp.io){ .md-button }

## Troubleshooting

??? question "Video Extraction Failed Error"

    If the error only occurs on a single/specific video, it is likely that the video has been removed by the uploader and is no longer available.

    If the error includes the message: "No module named 'yt_dlp'", this indicates that the module failed to update inside of the app. Try force closing Hot Tub (from the app switcher) and re-opening.

    If you consistently get this error for videos from a specific channel, something on that site may have recently changed.

    If all videos from all channels result in this error, try using a VPN or configuring a proxy. Some content might be geo-restricted or blocked by your ISP.

??? question "How do I download in the highest quality?"

    Hot Tub automatically attempts to download the highest quality available. If you're getting lower quality, the source might not provide higher quality options. You can change the quality by tapping the ellipses :material-dots-horizontal-circle-outline: button when the video player controls are displayed.

## General Questions

??? question "Why not just use [_insert website here_]?"

    Websites kinda suck.

    They're clunky. There are ads that pop up randomly and shift the page down right as I was gonna click something... and now I'm gonna have data-brokers selling my ad click data for penis enlargement pills that I didn't even mean to click on.

    Or even worse!: you go into redirect limbo... where no matter how many times you spam click the back button you're being told you won a new iPad and they just need credit card info for shipping but it expires in 120 seconds!
    Anyway... You see where I'm coming from?
    I wanted to make a native iOS app that was clean, simple, and easy to use.

??? question "Can you add [_insert website here_]?"

    You can request channels in [our discord](https://hottubapp.io/discord), either in the `#🌐-sites` channel, or by using `/submit site` slash command.

    We prioritize sites by number of requests, and while some sites we may be unable to add, the great thing about Hot Tub is that anyone can make a source and host it either for the community or themselves. Feel free to check out our server docs, you can [learn more here](/developers/server/)

## AltStore Specific

??? question "What is AltStore and AltStore PAL?"

    **AltStore PAL** is an official alternative app marketplace available only in the EU. With AltStore PAL you can install apps not available in the App Store, but without the limitations of AltStore (World).

    **AltStore (World)** is a community-driven alternative to the App Store. It allows you to install apps from third-party sources on your iOS device.

??? question "How do I install AltStore?"

    The AltStore team has provided some great resources for installing AltStore on your device.

    - [How to Install (macOS)](https://faq.altstore.io/altstore-classic/how-to-install-altstore-macos)
    - [How to Install (Windows)](https://faq.altstore.io/altstore-classic/how-to-install-altstore-windows)

??? question "How do I add a source to AltStore?"

    1. Open AltStore
    2. Tap the "Sources" tab
    3. Tap the "+" button in the top left corner
    4. Copy & paste the source URL: hottubapp.io/altstore, or hottubapp.io/altstore/pal (PAL only)
    5. If you've added the correct source, you should see the "Hot Tub" source in the list

    **Copy a source to your clipboard:**

    - AltStore (World): `hottubapp.io/altstore`
    - AltStore PAL (EU): `hottubapp.io/altstore/pal`

??? question "Error: AltServer could not be found"

    This means that AltStore is having trouble discovering AltServer on your local network. Make sure you're connected to the same WiFi network as your PC/Mac running AltServer, or try connecting your device to your computer via USB.

    1. Check for Altserver to be running
    2. (Mac) check for the mail plugin and if mail is running | (PC) check if you have iCloud/iTunes services running and Wi-Fi sync enabled(and installed from apple, not microsoft)
    3. Close altstore on iDevice and re-open it
    4. Connect via cable and try step 3

??? question "AltStore Error: Missing marketplaceID"

    This error occurs when attempting to add a non-PAL source to AltStore PAL. Make sure you're adding the correct source.

    **Copy a source to your clipboard:**

    - AltStore (World): `hottubapp.io/altstore`
    - AltStore PAL (EU): `hottubapp.io/altstore/pal`
