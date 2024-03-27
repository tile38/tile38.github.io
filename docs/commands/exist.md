---
id: exist
title: EXIST
sidebar_label: __no_label
---

## Syntax

**EXIST key id**

## Description

Gets a boolean indicating if a id exists or not for a given key.

Note that a non-existent key or id will cause an error!

## Examples

Get existence of a id `truck1` for key `fleet`.

```tile38-cli
EXIST fleet truck1
```

## Related Commands

[BOUNDS](../commands/bounds.md)<br>
[DEL](../commands/del.md)<br>
[DROP](../commands/drop.md)<br>
**[EXIST](../commands/exist.md)**<br>
[EXPIRE](../commands/expire.md)<br>
[FGET](../commands/fget.md)<br>
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