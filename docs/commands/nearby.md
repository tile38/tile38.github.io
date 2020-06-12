---
id: nearby
title: NEARBY
sidebar_label: __no_label
---

## Syntax

**NEARBY key [CURSOR start] [LIMIT count] [SPARSE spread] [MATCH pattern] [DISTANCE] [WHERE field min max ...] [WHEREIN field count value [value...] ...] [WHEREEVAL script numargs arg [arg...] ...] [WHEREEVALSHA sha1 numargs arg [arg...] ...] [NOFIELDS] [FENCE] [DETECT what] [COMMANDS which] [COUNT|IDS|OBJECTS|POINTS|BOUNDS|(HASHES precision)] (POINT lat lon meters)|(ROAM key pattern meters)**

## Description

The NEARBY command searches a collection for objects that are close to a specified point. The KNN algorithm is used instead of the standard overlap+Haversine algorithm, sorting the results in order of ascending distance from that point, i.e., nearest first.

This command has many options, but at it's most simplest it may appear like:

```tile38-cli
NEARBY fleet LIMIT 1 POINT 33.462 -112.268
```
to find the object closest to the given point.

If the radius is given:
```tile38-cli
NEARBY fleet POINT 33.462 -112.268 6000
```
then the search will be limited by that radius, in this case `6000` meters.

## Search Options

For a complete list of search options please see the [INTERSECTS](../commands/intersects.md#search-options) command.

## Output Formats

For a complete list of output formats please see the [INTERSECTS](../commands/intersects.md#output-formats) command.

## Related Commands

[INTERSECTS](../commands/intersects.md)<br>
**[NEARBY](../commands/nearby.md)**<br>
[SCAN](../commands/scan.md)<br>
[SEARCH](../commands/search.md)<br>
[WITHIN](../commands/within.md)<br>