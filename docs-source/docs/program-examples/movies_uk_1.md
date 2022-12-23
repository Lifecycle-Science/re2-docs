---
sidebar_position: 1
---

# "Next Streaming Movie Recommendation"

Recommending the "next best" movie to continue engagement using anonymized movie watch history of opted-in Netflix users (UK).

## Overview

### Event Source

The data sources is from a limited time period. The movie catalog only contains movies through 2017.
https://www.kaggle.com/datasets/vodclickstream/netflix-audience-behaviour-uk-movies

### Configuration

The tagging strategy is based on two hypothesis: (1) Users prefer movies by category, and (2) users prefer moves from certain eras. These hypothesis suggest movie categories and release year would be valuable event tags and are used in this case.

### Outliers & Caveats

A general caveat about streaming services: The same movies can be viewed across a number of platforms. If a user watches a movie on Hulu for example, the event will not be logged in Netflix data and therefore would (a) not be used to influence recommendations, and (b) possible be recommended as a "next best movie", even though the user has already seen it.
A specific caveat about this example: The source data set is date late 2017. Because we have chosen to favor recency, popular new releases in 2017 (e.g. La La Land) carry extra weight in thier recommendations.

## Output Examples

The below examples show how the system responded for three sample users. Each example includes (1) the event history logged for the given user, (2) the recommended actions, and (3) the weighted tags.

### User ffea3c44fc
#### Input: User History

| timestamp           | verb  | asset\_id  | asset\_name       | tags                                                         |
| ------------------- | ----- | ---------- | ----------------- | ------------------------------------------------------------ |
| 2017-12-13 04:53:36 | watch | c7c911ea47 | Shark Tale        | Animation, Adventure, Comedy, Family, Fantasy, 2004          |
| 2017-12-11 04:58:54 | watch | 736a4c633f | Get Hard          | Comedy, Crime, 2015                                          |
| 2017-12-07 00:03:07 | watch | f1fccba87c | Shrek 2           | Animation, Adventure, Comedy, Family, Fantasy, Romance, 2004 |
| 2017-12-04 06:20:52 | watch | e013ab5a31 | Arthur Christmas  | Animation, Adventure, Comedy, Family, Fantasy, 2011          |
| 2017-12-03 21:32:58 | watch | e013ab5a31 | Arthur Christmas  | Animation, Adventure, Comedy, Family, Fantasy, 2011          |
| 2017-11-30 01:53:07 | watch | 71c8779809 | Gnomeo and Juliet | Animation, Adventure, Comedy, Family, Romance, 2011          |

#### Output: Recommended Movies

| verb  | asset\_id  | asset\_name                         | weight |
| ----- | ---------- | ----------------------------------- | -----: |
| watch | cbe1f989b7 | Shrek                               | 9.4855 |
| watch | 5723d3932d | Shrek the Third                     | 2.8275 |
| watch | f8799ae38b | The Christmas Chronicles            | 1.8524 |
| watch | d8fe485619 | Shrek Forever After                 | 1.6351 |
| watch | 22d2b55a4b | Madagascar 3: Europe's Most Wanted  | 1.5886 |
| watch | 6f5b8bea7d | The Secret Life of Pets             | 1.4184 |
| watch | bc8d908142 | Madagascar                          |  1.307 |
| watch | 80dac1a953 | Hop                                 | 1.2437 |
| watch | 13de65e022 | Cloudy with a Chance of Meatballs 2 | 1.1097 |
| watch | 712eae4a7b | Charlie and the Chocolate Factory   | 1.0656 |

#### Output: Recommended Categories/Tags

`
{ "tags": [ { "Comedy": 2.0201 }, { "Animation": 1.6805 }, { "Adventure": 1.6805 }, { "Family": 1.6805 }, { "Fantasy": 1.348 }, { "2011": 1.0027 }, { "2004": 0.6778 }, { "Romance": 0.6694 }, { "2015": 0.3396 }, { "Crime": 0.3396 } ] }
`

### User fffeac83be

#### Input: User History

| timestamp           | verb  | asset\_name              | tags                                    |
| ------------------- | ----- | ------------------------ | --------------------------------------- |
| 2017-09-21 04:18:18 | watch | To the Bone              | Drama, 2017                             |
| 2017-09-19 04:03:08 | watch | Fight Club               | Drama, 1999                             |
| 2017-09-11 04:26:18 | watch | The Paedophile Next Door | Documentary, 2014                       |
| 2017-08-17 03:20:48 | watch | True Story               | Crime, Drama, Mystery, 2015             |
| 2017-08-15 04:50:55 | watch | The Big Short            | Biography, Comedy, Drama, History, 2015 |
| 2017-08-12 04:50:44 | watch | Son of Saul              | Drama, War, 2015                        |
| 2017-08-12 04:03:15 | watch | Amanda Knox              | Documentary, Crime, 2016                |
| 2017-08-11 04:09:41 | watch | Amanda Knox              | Documentary, Crime, 2016                |
| 2017-08-10 14:15:41 | watch | Enemy at the Gates       | Drama, History, War, 2001               |
| 2017-08-10 03:35:36 | watch | 127 Hours                | Biography, Drama, 2011                  |

#### Output: Recommended Movies

| verb  | asset\_id  | asset\_name                | weight |
| ----- | ---------- | -------------------------- | -----: |
| watch | b08e01920a | Abducted in Plain Sight    | 1.0872 |
| watch | e847f14da5 | Black Mirror: Bandersnatch | 0.8878 |
| watch | 271e85e3b3 | The Wolf of Wall Street    | 0.8119 |
| watch | ef19c8c41d | La La Land                 | 0.4663 |
| watch | 5f8a24a2ac | Polar                      | 0.4628 |
| watch | 0f3b137f4e | War Machine                | 0.3964 |
| watch | 2f2da39c9c | Irreplaceable You          | 0.3911 |
| watch | da66d6bb36 | IO                         | 0.3891 |
| watch | 8f8e4beb9f | Snowden                    |  0.337 |
| watch | 9909872dfc | The Propaganda Game        | 0.3339 |

#### Output: Recommended Categories/Tags

A weighted tag collection is also available to additional personalization.

`
{ "tags": [ { "Drama": 1.932 }, { "Documentary": 0.8245 }, { "2015": 0.8133 }, { "Crime": 0.8112 }, { "History": 0.5402 }, { "Biography": 0.54 }, { "2016": 0.5389 }, { "War": 0.5386 }, { "2017": 0.2911 }, { "1999": 0.29 }, { "2014": 0.2856 }, { "Mystery": 0.2723 }, { "Comedy": 0.2713 }, { "2001": 0.2689 }, { "2011": 0.2687 } ] }
`

User 1
User History

Recommended Movies
Based on the configuration, movies already streamed are excluded. 
Recommended Categories/Tags
