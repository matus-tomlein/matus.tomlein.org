---
title: Seelog
subtitle: Using Geotagged Photos to Track Your Travels
link: https://seelog.app
authors: Matúš Tomlein
banner: seelog-banner.jpg
date: 2019-05-24
---

Smartphones make it easy to track your steps, runs, sleep, or time spent using apps.
But getting data on which **countries, cities, timezones, and places you visited** is a bigger challenge.
Your main options are to log [your](https://itunes.apple.com/us/app/everyplace-where-ive-been/id1067276598?mt=8)
[travels](https://itunes.apple.com/us/app/visited-custom-map-of-travel/id846983349?mt=8)
[manually,](http://apparata.se/apps/been/)
give third-parties access to [your emails](https://get.google.com/trips/)
with [travel reservations](https://www.tripit.com/web), or run apps that
[track your](https://www.google.com/maps/timeline)
[GPS location](https://gyrosco.pe/) 24/7 for years.
Suffice it to say that none of these options are great.

There is one obvious source of data that is rarely used: **photos**.
Most people take photos when they travel, and many of them use smartphones or cameras that store **geotags along with the photos**.
This is an amazing source of data as it doesn't require additional tracking or manual input, and many of us have already collected a good amount of the data without even thinking about it.
Your photo library app can use the geotags to show you photos placed on a map, but there is so much more you can do with the data.
For instance, I'd be interested in how many countries I visited last year versus the previous year, which cities I spent most time in, and which timezones I was in.

So I built an iPhone app that does that.
It's called [**Seelog**](https://seelog.app/) and it uses geotagged photos to show you **visualisations and statistics about past travels**.
It also provides some fun features like
[fog of war exploration](https://en.wikipedia.org/wiki/Fog_of_war#In_video_games) of the map of the World similar to Age of Empires.
Visit [the website](https://seelog.app/) to learn more or
[download Seelog from App Store](https://itunes.apple.com/us/app/seelog/id1445469010?ls=1&mt=8) to try it.

The rest of this post will take you a bit behind the scenes to explain **how Seelog processes photo metadata** (time, latitude, and longitude) from iOS photo library without disrupting user privacy and providing a fast initialization.

## On-Device Reverse Geocoding

In order to find continents, countries, or cities from locations represented using latitude and longitude, [reverse geocoding](https://en.wikipedia.org/wiki/Reverse_geocoding) is commonly applied.
A number of cloud services let you do that, so you only need to call an API endpoint with the location and in response you get all sorts of information about it.
However, there are three problems with this: (1) you are sending **private** user information to third-party services, (2) it can get **slow** for users with hundreds of thousands of photos, and (3) it can be **costly** for larger numbers of API requests.

In Seelog, I decided to build my own reverse-geocoding system that runs on-device.
Since Seelog never sends any information about users' photos over network, it provides privacy for users, can process large numbers of photos much faster, and doesn't add operational expenses for me.
On the other hand, I needed an **on-device database** that would let me reverse geocode coordinates from across the World with reasonable accuracy.

Luckily, I was able to get most of the data I needed from the open and awesome [Natural Earth](https://www.naturalearthdata.com/) database.
It provides vector representations of country borders, timezones, continents, and more.
The representations are stored as geometric objects (most commonly polygons) in a standard
[WKB format.](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)
I could load the geometries in Python (using [Shapely](https://shapely.readthedocs.io/en/latest/)), process them to fit my needs and create an SQLite database to be embedded in the app.
The size of the final SQLite database in Seelog 1.1 is 140MB.

## The Power of Geohashes

Now, I needed to make use of the local database to reverse-geocode locations of photos.
Finding intersections of geographic locations with borders of countries represented as vectors (polygons) would be very **inefficient** (~0.05 seconds to match country for single location, ~1 hour for 72000 photos).
So I needed a more efficient representation of areas such as countries, cities, and timezones.

The answer was to use [**Geohash**](https://en.wikipedia.org/wiki/Geohash), a system for geocoding geographical locations into string hashes with arbitrary length.
Geohashes split the space of 2D coordinates into a grid, where each cell is represented by a hash.
The longer the hash, the smaller area it represents.
Encoding geographic locations in Geohash is very fast and you can find existing algorithms to do so in almost any programming language.

<input type="checkbox" id='mn-geohashes' checked className="margin-toggle" />
<span className="marginnote">
  <img src="/images/blogs/geohashes.jpg">
  Geohashes of different lengths split the space of 2D coordinates into grids. (Source: <a href="https://www.movable-type.co.uk/scripts/geohash.html" target="_blank">movable-type.co.uk</a>)
</span>

So when constructing the local database, I **extracted geohashes** that cover all areas that I wanted to reverse-geocode in Seelog and created their mappings to countries, cities, regions, and more.
To reverse-geocode country of a photo, Seelog only needs to geohash its location and find the corresponding country in a **dictionary-like** data structure mapping geohashes to country codes.

The trade-off in using geohashes is the **precision** of geocoding that you want to maintain.
A geohash with a length of 4 characters can have an error of ±20km.
A 5-character geohash has an error of ±2.4km.
To keep the size of the local database under 200MB, I opted for representing countries and other areas using geohashes of up to 5 characters.
5-character geohashes were used at borders of countries whereas larger continuous areas were represented with shorter geohashes.
The local database now has 677 469 geohashes for reverse-geocoding countries, 1 761 082 for regions (e.g., states), 28 847 for cities, 42 404 for timezones, and 8 371 for continents.

The local database stores geohashes in tables partitioned according to their first two letters.
For instance, a position in the UK with geohash `gcpvj` is stored in table `geohash_countries_gc`.
Whenever a photo with such geohash is reverse-geocoded in the app, the whole table is loaded into memory.
Since people tend to have many photos from the same area, this radically speeds up the initialization of Seelog.

All this enables Seelog to process **60 000 photos in 10 seconds** on iPhone XS without any information being sent away from your phone.
