---
id: intersects
title: INTERSECTS
sidebar_label: __no_label
---

## Syntax

**INTERSECTS key [CURSOR start] [BUFFER meters] [LIMIT count] [MATCH pattern] [WHERE field min max ...] [WHEREIN field count value [value...] ...] [WHEREEVAL script numargs arg [arg...] ...] [WHEREEVALSHA sha1 numargs arg [arg...] ...] [CLIP] [NOFIELDS] [FENCE] [DETECT what] [COMMANDS which] [COUNT|IDS|OBJECTS|POINTS|BOUNDS|(HASHES precision)] (GET key id)|(BOUNDS minlat minlon maxlat maxlon)|(OBJECT geojson)|(CIRCLE lat lon meters)|(TILE x y z)|(QUADKEY quadkey)|(HASH geohash)|(SECTOR lat lon meters bearing1 bearing2)**

## Description

INTERSECTS searches a collection for objects that intersect a specified bounding area.

[WITHIN](../commands/within.md) and [INTERSECTS](../commands/intersects.md) have identical syntax. The only difference between the two is that WITHIN returns objects that are _contained_ inside an area, and intersects returns objects that are _contained or intersects_ an area.

This command has many options, but at it’s most simplest it may appear like.

```tile38-cli
INTERSECTS fleet BOUNDS 33.462 -112.268 33.491 -112.245
```

Above is a search around the rectangle with the southwestern point `33.462,-112.268` and the northeastern point `33.491,-112.245`. A list of all objects that intersect the rectangle are returned.

<a name="search-options"></a>

## Search Options

Below is a complete list of search options. These options are shared by the [NEARBY](../commands/nearby.md), [WITHIN](../commands/within.md), [INTERSECTS](../commands/intersects.md), and [SCAN](../commands/scan.md) commands.

### FENCE

FENCE opens a [Geofence](../topics/geofencing.md).

### DETECT

DETECT is available when the FENCE options is specified. It allows for filtering out geofence notifications based on the type. For more information see the [Geofence](../topics/geofencing.md#detect) topic.

### WHERE

WHERE allows for filtering out results based on [field](../commands/set.md#fields) values and object attributes.

#### Field values

For example:

```tile38-cli
NEARBY fleet WHERE speed 70 +inf POINT 33.462 -112.268 6000
```

will return only the objects in the **fleet** collection that are within the 6 km radius **and** have a field named `speed` that is greater than `70`. <br><br>Multiple WHEREs are concatenated as **and** clauses. `WHERE speed 70 +inf WHERE age -inf 24` would be interpreted as _speed is over 70 <b>and</b> age is less than 24._<br><br>The default value for a field is always `0`. Thus if you do a WHERE on the field `speed` and an object does not have that field set, the server will pretend that the object does and that the value is Zero.

As of 1.30.0 Tile38 supports more elaborate [filter expressions](/topics/filter-expressions).

```tile38-cli
SET fleet truck2 FIELD info '{"speed":61,"name":"Tom"}' POINT -112 33
>> {"ok":true}

SCAN fleet WHERE 'info.speed > 45' COUNT
>> {"ok":true,"count":1,"cursor":0}
```

#### Object attributes

Using [gjson](https://github.com/tidwall/gjson), as of 1.30.0 Tile38 objects can be filtered by object attributes.

```tile38-cli
# add a complex object
SET fleet truck OBJECT '{"type":"Feature","geometry":{"type":"Point","coordinates":[-112,33]},"properties":{"speed":50},"asdf":"Adsf"}'
>> {"ok":true}

# scan fleet collection and filter
SCAN fleet WHERE properties.speed > 49 IDS
>> {"ok":true,"ids":["truck"],"count":1,"cursor":0}
```

### WHEREIN

WHEREIN is similar to WHERE except that it checks whether the object's [field](../commands/set.md#fields) value is in a given list. For example<br>`nearby fleet WHEREIN wheels 3 14 18 22 point 33.462 -112.268 6000` will return only the objects in the 'fleet' collection that are within the 6 km radius **and** have a field named `wheels` that is either `14` or `18` or `22`. <br><br>Multiple WHEREINs are concatenated as **and** clauses. `WHEREIN doors 2 2 5 WHEREIN wheels 3 14 18 22` would be interpreted as _doors is either 2 or 5 <b>and</b> wheels is either 14 or 18 or 22._<br><br>The default value for a field is always `0`. Thus if you do a WHEREIN on the field `wheels` and an object does not have that field set, the server will pretend that the object does and that the value is Zero. <br><br>**Note**: immediately following the **WHEREIN** token must be an integer specifying the number of values specified in this clause.

### WHEREEVAL

Similar to WHERE except that matching decision is made by Lua script. For example <br>`nearby fleet whereeval "return FIELDS.wheels > ARGV[1] or (FIELDS.length * FIELDS.width) > ARGV[2]" 2 8 120 point 33.462 -112.268 6000` will return only the objects in the `fleet` collection that are within the 6km radius **and** have a field named `wheels` that is above `8`, or have `length` and `width` whose product is greater than `120`.

Multiple WHEREEVALs are concatenated as **and** clauses. See [EVAL](../commands/eval.md) command for more details. Note that, unlike the EVAL command, WHEREVAL Lua environment (1) does not have KEYS global, and (2) has the FIELDS global with the Lua table of the iterated object's fields.

For objects that are GeoJSON Features, the `PROPERTIES` global will be available, which works like `FIELDS`. For example, if an object has a 'speed' property<br>`nearby fleet whereeval "return PROPERTIES.speed > 75" 0`


### MATCH

MATCH is similar to WHERE except that it works on the object id instead of fields.<br>`nearby fleet match truck* point 33.462 -112.268 6000` will return only the objects in the 'fleet' collection that are within the 6 km radius **and** have an object id that starts with `truck`. There can be multiple MATCH options in a single search. The MATCH value is a simple [glob pattern](<https://en.wikipedia.org/wiki/Glob_(programming)>).

### CURSOR

CURSOR is used to iterate though many objects from the search results. An iteration begins when the CURSOR is set to Zero or not included with the request, and completes when the cursor returned by the server is Zero.

### NOFIELDS

NOFIELDS tells the server that you do not want field values returned with the search results.

### CLIP

CLIP tells the server to clip intersecting objects by the bounding box area of the search. It can only be used with these area formats: BOUNDS, TILE, QUADKEY, HASH.

### LIMIT

LIMIT can be used to limit the number of objects returned for a single search request. If not provide, the default is 100.

### BUFFER

Apply a BUFFER around [Area Formats](#area-formats) to increase the search area by x meters in [WITHIN](../commands/within.md) and [INTERSECTS](../commands/intersects.md) searches.

<a name="output-formats"></a>

## Output Formats

Below is a complete list of output formats. These formats are shared by the [NEARBY](../commands/nearby.md), [WITHIN](../commands/within.md), [INTERSECTS](../commands/intersects.md), and [SCAN](../commands/scan.md) commands.

**COUNT** - Total object count sent in the response. When LIMIT or CURSOR are provided, COUNT returns the number of results that would otherwise be sent as objects. When LIMIT is not specified, COUNT totals up all items starting from provided CURSOR position (or zero if a cursor is omitted). _`LIMIT` and `CURSOR` options are ignored_

**IDS** - A list of IDs belonging to the key. Will not return the objects.

**OBJECTS** - A list of [GeoJSON](http://geojson.org/) objects.

**POINTS** - A list of standard latitude, longitude points.

**BOUNDS** - A list of [minimum bounding rectangle](https://en.wikipedia.org/wiki/Minimum_bounding_rectangle).

**HASHES** - A list of [Geohash](https://en.wikipedia.org/wiki/Geohash). _Requires a precision of 1 to 22._

<a name="area-formats"></a>

## Area Formats

Below is a complete list of area formats. These formats are shared by the [WITHIN](../commands/within.md) and [INTERSECTS](../commands/intersects.md) commands.

**GET** - Any object that already exists in the database. For example,

```tile38-cli
WITHIN poi GET cities tempe
```

Might be used to search for all object in the `poi` key that are within the object `tempe` that belongs to the key `cities`. Of course, the `cities/tempe` object must exist in the database.

**BOUNDS** - A [minimum bounding rectangle](../topics/object-types.md#bounds).

**OBJECT** - A [GeoJSON](../topics/object-types.md#geojson) object.

**CIRCLE** - A circle with the specified center and radius.

**TILE** - An [XYZ Tile](../topics/object-types.md#xyz-tile).

**QUADKEY** - A [QuadKey](../topics/object-types.md#quadkey).

**HASH** - A [Geohash](../topics/object-types.md#geohash).

**SECTOR** - A [Sector](../topics/object-types.md#sector).

<a name="fields"></a>

## Fields

The object [field](../commands/set.md#fields) values are grouped together in a list per object.
Due to the way Tile38 organizes field memory, it's possible to see zero values for fields
that have not been set. **It's recommended to treat all nonexistent or omitted fields as
having the value of zero.** Check out this [Github issue](https://github.com/tidwall/tile38/issues/169#issuecomment-295280587)
for more information.

## Related Commands

**[INTERSECTS](../commands/intersects.md)**<br>
[NEARBY](../commands/nearby.md)<br>
[SCAN](../commands/scan.md)<br>
[SEARCH](../commands/search.md)<br>
[WITHIN](../commands/within.md)<br>
