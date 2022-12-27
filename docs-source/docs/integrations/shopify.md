---
id: re2-shopify-app
sidebar_position: 2
title: RE2 Shopify App
---

# The RE2 Shopify App

:::caution

RE2 is in pre-release development. This documentation is a work in progress.

:::


## Overview

The RE2 Shopify App allows Shopify owners to use RE2 to generate recommended customer action segments for email marketing right from the Shopify merchant admin. The RE2 Shopify App uses order history events and key site visits to inform the recommendations which are optimized for driving customer engagement.

## Required Permissions

The RE2 Shopify app needs certain permissions to generate actions recommendations and build segments.

:::info 
RE2 does not read (or store) any Shopify or merchant customer data other than the data described below. No personal or contact information is used.
:::


| Permission    | Data Accessed | Purpose   |
| ---           | ---           | ---       |
| `read_products` | | Products are a form of "assets" in RE2 events. Reading products allows RE2 to maintain assets references and asset labels used in the recommendation models. |
| `read_orders` | `order.created_at`, `order.customer.id`,  `order.line_items.product_id`, `order.customerJourneySummary.firstVisit.landingPage`, `order.customerJourneySummary.firstVisit.occurredAt`,  `order.customerJourneySummary.lastVisit.landingPage`, `order.customerJourneySummary.lastVisit.occurredAt` | Orders and csustomer visits and event types in RE2. Reading orders and customer visists allows RE2 to build event histories used in the recommendation models. |
| `read_customers` |  `customer.customer_id` | RE2 creates customer metafields with action recommendations and segment identifiers. (Reading customers is required before RE2 can update these fields.) |
| `write_customers` | `customer.metafields` | RE2 creates customer metafields with action recommendations and segment identifiers. Custoer metafields are limited in scope to the app that creates them. |


## Shopify Events in RE2

The Shopify app reports two kinds of events: "orders" and "views"

### "Order" Event Types

Order events are obtained from Shopify via the `orders = shopify.Order.find()` method.
At this time the Shopify order instance does not contain any values to be used as labels. 
The "order" event mappings are below:

| RE2 Event Field | Shopify Order Field |
| --- | --- |
| `user_id` | `order.customer_id` |
| `event_timestamp` | `order.created_at` |
| `event_type` | "order" |
| `asset_id` | `order.product_id` |
| `labels` | `[]` |


### "View" Event Types

View events are obtained from `customerJourneySummary` data contained in the `order` object.
Specifically, the first and last landing page visits are recorded as "view" events.
These two visits are referenced `customerVisit` objecs from either the `customer_journey["firstVisit"]` or
`customer_journey["lastVisit"]` values. The "view" event mappings are below:

| RE2 Event Field | Shopify Order Field |
| --- | --- |
| `user_id` | `order.customer_id` |
| `event_timestamp` |  `customerVisit["occurredAt"]` |
| `event_type` | "visit" |
| `asset_id` | `customerVisit["landingPage"]` |
| `labels` | `[]` |


## Shopify Assets in RE2

## Shopify Action Recommendations

```

```

RE2 provides Shopify merchants with three forms of customer insights for customer segmentation and campaign targeting integrated directly into Shofify stores. The three type are: (1) "Order" actions, (2) "View" actions, and (3) "Label" preferences.  These preferences are stored in customor metafields....

