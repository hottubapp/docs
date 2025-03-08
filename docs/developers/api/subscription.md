---
title: :material-server: API: Status
---

# :material-server: Status

## Overview

Hot Tub enables you to host your own video content. It is a self-contained application that can be deployed on a server or a local machine.

## Subscription

The `POST /api/subscription` endpoint is used for managing subscriptions within the Hot Tub application. It interacts with the Stripe subscription object to handle various subscription-related actions. Below are the key functionalities:

### POST subscription

This endpoint allows you to create, retrieve, update, and manage subscriptions for users. The following actions can be performed:

- `create_customer_session`: Initiates a customer session for checkout.
- `create_checkout`: Creates a checkout session for a subscription.
- `create_portal`: Generates a portal session for managing subscriptions.
- `get_subscription`: Retrieves the current subscription details for a user.
- `create_invite`: Creates an invite for a user to join a subscription.
- `accept_invite`: Allows a user to accept an invite to a subscription.

### Subscription Object

The subscription object contains the following key properties:

- `id`: Unique identifier for the subscription.
- `customer`: The ID of the customer associated with the subscription.
- `items`: The subscription items, which include the plan and quantity.
- `subscription`: The subscription object.
- `status`: Current status of the subscription (e.g., active, past_due, canceled).
- `billing_cycle_anchor`: Timestamp indicating when the subscription's billing cycle starts.
- `current_period_start`: Timestamp for the start of the current billing period.
- `current_period_end`: Timestamp for the end of the current billing period.
- `cancel_at_period_end`: Boolean indicating if the subscription will cancel at the end of the current period.

For more details on the subscription object, refer to the [Stripe API documentation](https://stripe.com/docs/api/subscriptions).
