---
id: object-types
title: Object Types
sidebar_label: Object Types
---



All object types except for XYZ Tiles and QuadKeys can be stored in a collection. XYZ Tiles and QuadKeys are reserved for the SEARCH keyword only.

<a name="latlon-point"></a>

## Lat/lon Point

The most basic object type is a point that is composed of a latitude and a longitude. There is an optional `z` member that may be used for auxiliary data such as elevation or a timestamp.

```tile38-cli
SET fleet truck1 POINT 33.5123 -112.2693     # plain lat/lon
SET fleet truck1 POINT 33.5123 -112.2693 225 # lat/lon with z member
```

<a name="bounding-box"></a>

## Bounding Box

A bounding box consists of two points. The first being the southwestern most point and the second is the northeastern most point.

```tile38-cli
SET fleet truck1 BOUNDS 30 -110 40 -100
```

<a name="geohash"></a>

## Geohash

A [geohash](https://en.wikipedia.org/wiki/Geohash) is a string respresentation of a point. With the length of the string indicating the precision of the point.

```tile38-cli
SET fleet truck1 HASH 9tbnthxzr   # this would be equivlent to 'POINT 33.5123 -112.2693'
```

<a name="geojson"></a>

## GeoJSON

[GeoJSON](http://geojson.org/) is an industry standard format for representing a variety of object types including a point, multipoint, linestring, multilinestring, polygon, multipolygon, geometrycollection, feature, and featurecollection. Tile38 supports all of the standards with these exceptions.

1. The `crs` member is not supported and will be ignored. The [CRS84/WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System) projection is assumed.
2. Any member that is not recognized (including `crs`) will be ignored.
3. All coordinates can be 2 or 3 axes. Less than 2 axes or more than 3 will result in a parsing error.

<i>\* All ignored members will not persist.</i>

**Important to note that all coordinates are in Longitude, Latitude order.**

```tile38-cli
SET city tempe OBJECT {"type":"Polygon","coordinates":[[[-111.9787,33.4411],[-111.8902,33.4377],[-111.8950,33.2892],[-111.9739,33.2932],[-111.9787,33.4411]]]}
```

<a name="xyz-tile"></a>

## XYZ Tile

An XYZ tile is rectangle bounding area on earth that is represented by an X, Y coordinate and a Z (zoom) level.
Check out [maptiler.org](http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/) for an interactive example.

<a name="quadkey"></a>

## QuadKey

A QuadKey used the same coordinate system as an XYZ tile except that the string representation is a string characters composed of 0, 1, 2, or 3. For a detailed explanation checkout [The Bing Maps Tile System](https://msdn.microsoft.com/en-us/library/bb259689.aspx).
