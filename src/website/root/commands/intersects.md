<!--
layout:  index.html
title:   INTERSECTS - Tile38
class:   command
super:   documentation
command: intersects
-->

INTERSECTS searches a collection for objects that intersect a specified bounding area. 

[WITHIN](/commands/within) and [INTERSECTS](/commands/intersects) have identical syntax. The only difference between the two is that WITHIN returns objects that are *contained* inside an area, and intersects returns objects that are *contained or intersects* an area.

This command has many options, but at it’s most simplest it may appear like.

```tile38
INTERSECTS fleet BOUNDS 33.462 -112.268 33.491 -112.245
```

Above is a search around the rectangle with the southwestern point `33.462,-112.268` and the northeastern point `33.491,-112.245`. A list of all objects that intersect the rectangle are returned.

<a name="search-options"></a>
## Search Options

Below is a complete list of search options. These options are shared by the [NEARBY](/commands/nearby), [WITHIN](/commands/within), [INTERSECTS](/commands/intersects), and [SCAN](/commands/scan) commands.

*Please note that the [SCAN](/commands/scan) command does not allow `FENCE` and `SPARSE`.*

**FENCE** - FENCE opens a [Geofence](/topics/geofencing).

**DETECT** - DETECT is available when the FENCE options is specified. It allows for filtering out geofence notifications based on the type. For more information see the [Geofence](/topics/geofencing#detect) topic.

**SPARSE** - SPARSE will distribute the results of a search evenly across the requested area.  
This is very helpful for example; when you have many (perhaps millions) of objects and do not want them all clustered together on a map. Sparse will limit the number of objects returned and provide them evenly distributed so that your map looks clean.<br><br>
You can choose a value between 1 and 8. The value 1 will result in no more than 4 items. The value 8 will result in no more than 65536. *1=4, 2=16, 3=64, 4=256, 5=1024, 6=4098, 7=16384, 8=65536.*<br>
<table width="100%"> 
    <td align="center">No Sparsing<img src="/assets/images/sparse-none.png" width="100" height="100" border="0" alt="Search Within"></td>
    <td align="center">Sparse 1<img src="/assets/images/sparse-1.png" width="100" height="100" border="0" alt="Search Within"></td>
    <td align="center">Sparse 2<img src="/assets/images/sparse-2.png" width="100" height="100" border="0" alt="Search Within"></td>
    <td align="center">Sparse 3<img src="/assets/images/sparse-3.png" width="100" height="100" border="0" alt="Search Within"></td>
    <td align="center">Sparse 4<img src="/assets/images/sparse-4.png" width="100" height="100" border="0" alt="Search Within"></td>
    <td align="center">Sparse 5<img src="/assets/images/sparse-5.png" width="100" height="100" border="0" alt="Search Within"></td>
</table><br>
*Please note that the higher the sparse value, the slower the performance. Also, LIMIT and CURSOR are not available when using SPARSE.* 

**WHERE** - WHERE allows for filtering out results based on [field](/commands/set#fields) values. For example<br>```nearby fleet where speed 70 +inf point 33.462 -112.268 6000``` will return only the objects in the 'fleet' collection that are within the 6 km radius **and** have a field named `speed` that is greater than `70`. <br><br>Multiple WHEREs are concatenated as **and** clauses. ```WHERE speed 70 +inf WHERE age -inf 24``` would be interpreted as *speed is over 70 <b>and</b> age is less than 24.*<br><br>The default value for a field is always `0`. Thus if you do a WHERE on the field `speed` and an object does not have that field set, the server will pretend that the object does and that the value is Zero.

**WHEREIN** - WHEREIN is similar to WHERE except that it checks whether the object's [field](/commands/set#fields) value is in a given list. For example<br>```nearby fleet where wheels 3 14 18 22 point 33.462 -112.268 6000``` will return only the objects in the 'fleet' collection that are within the 6 km radius **and** have a field named `wheels` that is either `14` or `18` or `22`. <br><br>Multiple WHEREINs are concatenated as **and** clauses. ```WHEREIN doors 2 2 5 WHEREIN wheels 3 14 18 22``` would be interpreted as *doors is either 2 or 5 <b>and</b> wheels is either 14 or 18 or 22.*<br><br>The default value for a field is always `0`. Thus if you do a WHEREIN on the field `wheels` and an object does not have that field set, the server will pretend that the object does and that the value is Zero. <br><br>**Note**: immediately following the **WHEREIN** token must be an integer specifying the number of values specified in this clause.

**WHEREEVAL and WHEREEVALSHA** - similar to WHERE except that matching decision is made by Lua script. For example <br>```nearby fleet whereeval "return FIELDS.wheels > ARGV[1] or (FIELDS.length * FIELDS.width) > ARGV[2]" 2 8 120 point 33.462 -112.268 6000``` will return only the objects in the `fleet` collection that are within the 6km radius **and** have a field named `wheels` that is above `8`, or have `length` and `width` whose product is greater than `120`. <br>Multiple WHEREEVALs are concatenated as **and** clauses.  See [EVAL](/commands/eval) command for more details.  Note that, unlike the EVAL command, WHEREVAL Lua environment (1) does not have KEYS global, and (2) has the FIELDS global with the Lua table of the iterated object's fields.

**MATCH** - MATCH is similar to WHERE except that it works on the object id instead of fields.<br>```nearby fleet match truck* point 33.462 -112.268 6000``` will return only the objects in the 'fleet' collection that are within the 6 km radius **and** have an object id that starts with `truck`. There can be multiple MATCH options in a single search. The MATCH value is a simple [glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

**CURSOR** - CURSOR is used to iterate though many objects from the search results. An iteration begins when the CURSOR is set to Zero or not included with the request, and completes when the cursor returned by the server is Zero.

**NOFIELDS** - NOFIELDS tells the server that you do not want field values returned with the search results.

**CLIP** - CLIP tells the server to clip intersecting objects by the bounding box area of the search.  It can only be used with these area formats: BOUNDS, TILE, QUADKEY, HASH.

**LIMIT** - LIMIT can be used to limit the number of objects returned for a single search request.


<a name="output-formats"></a>
## Output Formats

Below is a complete list of output formats. These formats are shared by the [NEARBY](/commands/nearby), [WITHIN](/commands/within), [INTERSECTS](/commands/intersects), and [SCAN](/commands/scan) commands.

**COUNT** - Total object count sent in the response. When LIMIT or CURSOR are provided, COUNT returns the number of results that would otherwise be sent as objects. When LIMIT is not specified, COUNT totals up all items starting from provided CURSOR position (or zero if a cursor is omitted). *`LIMIT` and `CURSOR` options are ignored*

**IDS**  - A list of IDs belonging to the key. Will not return the objects.

**OBJECTS** - A list of [GeoJSON](http://geojson.org/) objects.

**POINTS** - A list of standard latitude, longitude points.

**BOUNDS** - A list of [minimum bounding rectangle](https://en.wikipedia.org/wiki/Minimum_bounding_rectangle).

**HASHES** - A list of [Geohash](https://en.wikipedia.org/wiki/Geohash). *Requires a precision of 1 to 22.*

<a name="area-formats"></a>
## Area Formats

Below is a complete list of area formats. These formats are shared by the [WITHIN](/commands/within) and [INTERSECTS](/commands/intersects) commands.


**GET** - Any object that already exists in the database. For example, 

```tile38
WITHIN poi GET cities tempe
```

Might be used to search for all object in the `poi` key that are within the object `tempe` that belongs to the key `cities`. Of course, the `cities/tempe` object must exist in the database.

**BOUNDS** - A [minimum bounding rectangle](/topics/object-types#bounds).

**OBJECT** - A [GeoJSON](/topics/object-types#geojson) object.

**CIRCLE** - A circle with the specified center and radius.

**TILE** -  An [XYZ Tile](/topics/object-types#xyz-tile).

**QUADKEY** - A [QuadKey](/topics/object-types#quadkey).

**HASH** - A [Geohash](/topics/object-types#geohash).

<a name="fields"></a>
## Fields

The object [field](/commands/set#fields) values are grouped together in a list per object.
Due to the way Tile38 organizes field memory, it's possible to see zero values for fields
that have not been set. **It's recommended to treat all nonexistent or omitted fields as
having the value of zero.** Check out this [Github issue](https://github.com/tidwall/tile38/issues/169#issuecomment-295280587)
for more information.




