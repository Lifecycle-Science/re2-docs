---
sidebar_position: 2
---

# "Next Electronics Purchase Recommendation"

:::caution

This documentation is a work in progress.

:::

## Overview

### Event Source

The source data for this program included: 420,718 timestamped line items (events) for 203,478 known customers (users) from a catalog of 11,558 total products (assets). The majority of users, 87.6%, have 3 or fewer purchases - more that half only have one purchase. For this program our objective is to drive users to 4+ purchase actions to join the highly engaged cohort in the top 12%.
The full source data set is available here: https://www.kaggle.com/datasets/mkechinov/ecommerce-purchase-history-from-electronics-store

### Configuration

(See  for an explination for how these configuration options impact program output.)
high_engagement_threshold = 4 ("Highly engaged customers" are those in the top decile (10%) for total products purchased, which for this electronics store is 4+ distinct items.)

### Outliers & Caveats

For program assets, this data source does not include full product names to map to the product ids. Therefore, a string that combines category with brand will be used for the asset names in this program.

## Output Examples