<!--
layout:  index.html
title:   NEARBY - Tile38
class:   command
super:   documentation
command: nearby
-->

The NEARBY command searches a collection for objects that intersect a specified radius.

This command has many options, but at it's most simplest it may appear like.

```tile38
NEARBY fleet POINT 33.462 -112.268 6000
```

Above is a search around the point `33.462,-112.268` with a radius of `6000` meters. A list of all objects that intersect that radius are returned.


## Search Options

For a complete list of search options please see the [INTERSECTS](/commands/intersects#search-options) command.

## Output Formats

For a complete list of output formats please see the [INTERSECTS](/commands/intersects#output-formats) command.

## KNN Search
Normally the results of NEARBY are unsorted, but when a LIMIT is set with no radius, the KNN algorithm will be used instead of the standard overlap+Haversine algorithm, sorting the results in order of distance ascending, i.e., nearest first.

The following example will find the object closest to the given point:

```tile38
NEARBY fleet LIMIT 1 POINT 33.462 -112.268
```