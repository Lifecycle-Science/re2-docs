---
id: re2-shopify-app
sidebar_position: 2
title: ActionHub Shopify App
---

# The ActionHub Shopify App

:::caution

ActionHub is in pre-release development. This documentation is a work in progress.

:::


## Overview

The ActionHub Shopify App allows Shopify owners to use ActionHub to generate recommended customer action segments for email marketing right from the Shopify merchant admin. The ActionHub Shopify App uses order history events and key site visits to inform the recommendations which are optimized for driving customer engagement.

With the [ActionHub Starter Plan](/pricing), Shopify store owners get:
* Nightly segment updates using ActionHub's powerful predictive modeling
* 


## Required Permissions

The ActionHub Shopify app needs certain permissions to generate actions recommendations and build segments.

:::info 
ActionHub does not read (or store) any Shopify or merchant customer data other than the data described below. No personal or contact information is used.
:::


| Permission    | Data Accessed | Purpose   |
| ---           | ---           | ---       |
| `read_products` | | Products are a form of "assets" in ActionHub events. Reading products allows ActionHub to maintain assets references and asset labels used in the recommendation models. |
| `read_orders` | `order.created_at`, `order.customer.id`,  `order.line_items.product_id`, `order.customerJourneySummary.firstVisit.landingPage`, `order.customerJourneySummary.firstVisit.occurredAt`,  `order.customerJourneySummary.lastVisit.landingPage`, `order.customerJourneySummary.lastVisit.occurredAt` | Orders and csustomer visits and event types in RE2. Reading orders and customer visists allows ActionHub to build event histories used in the recommendation models. |
| `read_customers` |  `customer.customer_id` | ActionHub creates customer metafields with action recommendations and segment identifiers. (Reading customers is required before ActionHub can update these fields.) |
| `write_customers` | `customer.metafields` | ActionHub creates customer metafields with action recommendations and segment identifiers. Custoer metafields are limited in scope to the app that creates them. |


## Shopify Events in ActionHub

The Shopify app reports two kinds of events: "orders" and "views"

### "Order" Event Types

Order events are obtained from Shopify via the `orders = shopify.Order.find()` method.
At this time the Shopify order instance does not contain any values to be used as labels. 
The "order" event mappings are below:

| ActionHub Event Field | Shopify Order Field |
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

| ActionHub Event Field | Shopify Order Field |
| --- | --- |
| `user_id` | `order.customer_id` |
| `event_timestamp` |  `customerVisit["occurredAt"]` |
| `event_type` | "visit" |
| `asset_id` | `customerVisit["landingPage"]` |
| `labels` | `[]` |


## Shopify Assets in ActionHub

## Shopify Action Recommendations

ActionHub provides Shopify merchants with three forms of customer insights for customer segmentation and campaign targeting integrated directly into Shofify stores. The three type are: (1) "Order" actions, (2) "View" actions, and (3) "Label" preferences.  These preferences are stored in customor metafields....

