---
id: renamenx
title: RENAMENX
sidebar_label: __no_label
---

## Syntax

**RENAMENX key newkey**

## Description

Renames collection `key` to `newkey`, if it does not exist yet. If 
`newkey` already exists, this command does nothing.

Returns 1 if `key` was renamed to `newkey`, 0 if `newkey` already existed, or 
"ERR" when `key` or `newkey` are actively being used by a geofence or webhook.

## Examples

```tile38-cli
RENAMENX fleet fleet2
```

## Related Commands

[BOUNDS](../commands/bounds.md)<br>
[DEL](../commands/del.md)<br>
[DROP](../commands/drop.md)<br>
[EXPIRE](../commands/expire.md)<br>
[FSET](../commands/fset.md)<br>
[GET](../commands/get.md)<br>
[JDEL](../commands/jdel.md)<br>
[JGET](../commands/jget.md)<br>
[JSET](../commands/jset.md)<br>
[KEYS](../commands/keys.md)<br>
[PDEL](../commands/pdel.md)<br>
[PERSIST](../commands/persist.md)<br>
[RENAME](../commands/rename.md)<br>
**[RENAMENX](../commands/renamenx.md)**<br>
[SET](../commands/set.md)<br>
[STATS](../commands/stats.md)<br>
[TTL](../commands/ttl.md)<br>