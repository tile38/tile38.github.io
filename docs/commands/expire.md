---
id: expire
title: EXPIRE
sidebar_label: __no_label
---

## Syntax

**EXPIRE key id seconds**

## Description

Set a timeout on an id.

## Examples

```tile38-cli
EXPIRE fleet truck 10
```

This will remove the `truck` object from the `fleet` key after 10 seconds have elapsed.

## Related Commands

[BOUNDS](../commands/bounds.md)<br>
[DEL](../commands/del.md)<br>
[DROP](../commands/drop.md)<br>
**[EXPIRE](../commands/expire.md)**<br>
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