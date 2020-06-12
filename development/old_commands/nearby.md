<!--
layout:  index.html
title:   NEARBY - Tile38
class:   command
super:   documentation
command: nearby
-->

The NEARBY command searches a collection for objects that are close to a specified point. The KNN algorithm is used instead of the standard overlap+Haversine algorithm, sorting the results in order of ascending distance from that point, i.e., nearest first.

This command has many options, but at it's most simplest it may appear like:

```tile38
NEARBY fleet LIMIT 1 POINT 33.462 -112.268
```
to find the object closest to the given point.

If the radius is given:
```tile38
NEARBY fleet POINT 33.462 -112.268 6000
```
then the search will be limited by that radius, in this case `6000` meters.

## Search Options

For a complete list of search options please see the [INTERSECTS](/commands/intersects#search-options) command.

## Output Formats

For a complete list of output formats please see the [INTERSECTS](/commands/intersects#output-formats) command.
