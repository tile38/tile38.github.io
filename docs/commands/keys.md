---
id: keys
title: KEYS
sidebar_label: __no_label
---

## Syntax

**KEYS pattern**

## Description

Returns all keys matching `pattern`.

Supported [glob-style patterns](https://en.wikipedia.org/wiki/Glob_(programming)):

- h?llo matches hello, hallo and hxllo
- h*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo

## Examples

```tile38-cli
KEYS *         # return all keys
KEYS fleet:*   # return all keys that have the prefix with 'fleet:'
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
**[KEYS](../commands/keys.md)**<br>
[PDEL](../commands/pdel.md)<br>
[PERSIST](../commands/persist.md)<br>
[RENAME](../commands/rename.md)<br>
[RENAMENX](../commands/renamenx.md)<br>
[SET](../commands/set.md)<br>
[STATS](../commands/stats.md)<br>
[TTL](../commands/ttl.md)<br>