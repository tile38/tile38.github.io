<!--
layout:  index.html
title:   GET - Tile38
class:   command
super:   documentation
command: get
-->

Get the object of an id. The default output format is a GeoJSON object.

Output formats:

- **OBJECT**: A [GeoJSON](http://geojson.org/) object.
- **POINT**: A standard latitude, longitude point.
- **BOUNDS**: A [minimum bounding rectangle](https://en.wikipedia.org/wiki/Minimum_bounding_rectangle). 
- **HASH**: A [Geohash](https://en.wikipedia.org/wiki/Geohash).

A Geohash requires a precision of 1 to 22.

The **WITHFIELDS** option will also return the [fields](/commands/set#fields) that belong to the object.
Field values that are equal to zero are omitted.

## Examples

```tile38
GET fleet truck1          # get geojson object 'truck1' from 'fleet'
GET fleet truck1 OBJECT   # same as above
GET fleet truck1 POINT    # get latitude, longitude point
GET fleet truck1 BOUNDS   # get bounding rectangle
GET fleet truck1 HASH 5   # get geohash with precision of 5
```

