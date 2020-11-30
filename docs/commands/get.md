---
id: get
title: GET
sidebar_label: __no_label
---

## Syntax

**GET key id [WITHFIELDS] [OBJECT|POINT|BOUNDS|(HASH geohash)]**

## Description

Get the object of an id. The default output format is a GeoJSON object.

Output formats:

- **OBJECT**: A [GeoJSON](http://geojson.org/) object.
- **POINT**: A standard latitude, longitude point.
- **BOUNDS**: A [minimum bounding rectangle](https://en.wikipedia.org/wiki/Minimum_bounding_rectangle). 
- **HASH**: A [Geohash](https://en.wikipedia.org/wiki/Geohash).

A Geohash requires a precision of 1 to 22.

The **WITHFIELDS** option will also return the [fields](../commands/set.md#fields) that belong to the object.
Field values that are equal to zero are omitted.

## Examples

```tile38-cli
GET fleet truck1          # get geojson object 'truck1' from 'fleet'
GET fleet truck1 OBJECT   # same as above
GET fleet truck1 POINT    # get latitude, longitude point
GET fleet truck1 BOUNDS   # get bounding rectangle
GET fleet truck1 HASH 5   # get geohash with precision of 5
```

## Related Commands

[BOUNDS](../commands/bounds.md)<br>
[DEL](../commands/del.md)<br>
[DROP](../commands/drop.md)<br>
[EXPIRE](../commands/expire.md)<br>
[FSET](../commands/fset.md)<br>
**[GET](../commands/get.md)**<br>
[JDEL](../commands/jdel.md)<br>
[JGET](../commands/jget.md)<br>
[JSET](../commands/jset.md)<br>
[KEYS](../commands/keys.md)<br>
[PDEL](../commands/pdel.md)<br>
[PERSIST](../commands/persist.md)<br>
[RENAME](../commands/rename.md)<br>
[RENAMENX](../commands/renamenx.md)<br>
[SET](../commands/set.md)<br>
[STATS](../commands/stats.md)<br>
[TTL](../commands/ttl.md)<br>