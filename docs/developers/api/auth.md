---
title: :material-server: API: Auth
---

# :material-server: Auth

## Overview

You can restrict access to channels by requiring users to authenticate. This is useful for paid content, or for any content you want to restrict access to.

## Auth

The `POST /api/auth` endpoint is used for handling various authentication actions. It requires a URL parameter `action` to specify the desired operation. The available actions include:

- `register`: Create a new user account.
- `login`: Authenticate an existing user.
- `forgot-password`: Initiate a password reset process.
- `reset-password`: Update the user's password.
- `exchange-token`: Exchange a temporary token for a session.
- `logout`: Terminate the user's session.
- `delete-account`: Permanently remove the user account.
- `resend-verification`: Send a verification email to the user.

You are responsible for managing authentication with your app. To keep things simple, we use a simple URL scheme `hottub://auth?token={authenticated_user_token_here}&source={your_source_id}`. Once your user has authenticated, you can redirect them back to the app. Their auth token will be included in requests to your source moving forward.

If your source supports authentication, users will be directed to an `/api/auth` page from the app.
