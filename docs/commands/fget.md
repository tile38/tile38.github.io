---
id: fget
title: FGET
sidebar_label: __no_label
---

## Syntax

**FGET key id field**

## Description

Gets the value for a field of an id.

Return value is the value of the field or `0` if a field does not exist or is not set.

Note that a non-existent key or id will cause an error!

## Examples

Get a field named `speed` for `truck1`.

```tile38-cli
FGET fleet truck1 speed
```

## Related Commands

[BOUNDS](../commands/bounds.md)<br>
[DEL](../commands/del.md)<br>
[DROP](../commands/drop.md)<br>
[EXPIRE](../commands/expire.md)<br>
**[FGET](../commands/fget.md)**<br>
[FSET](../commands/fset.md)<br>
[GET](../commands/get.md)<br>
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