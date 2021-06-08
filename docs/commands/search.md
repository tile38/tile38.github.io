---
id: search
title: SEARCH
sidebar_label: __no_label
---

## Syntax

**SEARCH key [CURSOR start] [LIMIT count] [MATCH pattern] [ASC|DESC] [WHERE field min max ...] [WHEREIN field count value [value...] ...] [WHEREEVAL script numargs arg [arg...] ...] [WHEREEVALSHA sha1 numargs arg [arg...] ...] [NOFIELDS] [COUNT|IDS]**

## Description

SEARCH iterates though a key's string values.

This command has many options, but at it’s most simplest it may appear like.

```tile38-cli
SEARCH names
```

Above is a scan for all strings in the `names` key. 

It's also possible to filter the values using the MATCH keyword and to order the results using ASC and DESC.
For Example:

```tile38-cli
SEARCH names MATCH J* DESC
```

The above command will search for all values that begin with `J` from the `names` key and return the results in descending order.

Please note that this command only STRING values. 
Geo values such and POINT and OBJECT require use the SCAN command.

## Related Commands

[INTERSECTS](../commands/intersects.md)<br>
[NEARBY](../commands/nearby.md)<br>
[SCAN](../commands/scan.md)<br>
**[SEARCH](../commands/search.md)**<br>
[WITHIN](../commands/within.md)<br>