<!--
layout:  index.html
title:   Area Expressions - Tile38
class:   topic
super:   documentation
-->

# Areas and Expressions

The `INTERSECTS`, `WITHIN`, and `TEST` commands can specify their scope in a variety of ways, using areas and expressions explained below.

## Areas
Areas of interest can be specified as:
* `POINT lat lon`: a single point;
* `BOUNDS minlat minlon maxlat maxlon`: a [rectangle with specified bounds](/topics/object-types#bounds).
* `CIRCLE lat lon meters`: a circle centered at `lat`/`lon` and radius in meters.
* `OBJECT geojson_string`: a [GeoJSON](/topics/object-types#geojson) object.
* `HASH hash_string`: a [Geohash](/topics/object-types#geohash).
* `QUADKEY x y zoom`: a [QuadKey](/topics/object-types#quadkey).
* `TILE x y zoom`: a [XYZ Tile](/topics/object-types#xyz-tile).
* `GET key id`: an existing object stored in `key` under an `id`.

## Area Expressions
Area expressions are the logical expressions build from basic areas. To build an expression, one can:
* combine items using `AND` and `OR`;
* negate items using `NOT`;
* group items using parentheses.

## Example expressions
```tile38-cli
GET anotherKey poly8 AND OBJECT poly {"type":"Polygon","coordinates":[[[-122.4408378,37.7341129],[-122.4408378,37.733],[-122.44,37.733],[-122.44,37.7341129],[-122.4408378,37.7341129]],[[-122.44060993194579,37.73345766902749],[-122.44044363498686,37.73345766902749],[-122.44044363498686,37.73355524732416],[-122.44060993194579,37.73355524732416],[-122.44060993194579,37.73345766902749]],[[-122.44060724973677,37.7336888869566],[-122.4402102828026,37.7336888869566],[-122.4402102828026,37.7339752567853],[-122.44060724973677,37.7339752567853],[-122.44060724973677,37.7336888869566]]]}

CIRCLE 33.462, -112.268, 60000 AND ( BOUNDS -122.4412 37.73290 -122.439 37.7342 OR TILE -122.4412 37.73290 12 )

GET anotherKey obj1 AND NOT GET anotherKey obj2
```

## Semantics of expressions

* `INTERSECTS a AND b` means `INTERSECTS a AND INTERSECTS b`
* `WITHIN a OR ( b AND NOT c )` means `WITHIN a OR ( WITHIN b AND NOT WITHIN c )`
