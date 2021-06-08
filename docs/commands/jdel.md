---
id: jdel
title: JDEL
sidebar_label: __no_label
---

## Syntax

**JDEL key id path**

## Description

Delete a value from a JSON document.

JGET, JSET, and JDEL allow for working with JSON strings, for example:

```tile38-cli
JSET user 901 name Tom
JGET user 901
> {"name":"Tom"}

JSET user 901 name.first Tom
JSET user 901 name.last Anderson
JGET user 901
> {"name":{"first":"Tom","last":"Anderson"}}

JDEL user 901 name.last
JGET user 901
> {"name":{"first":"Tom"}}
```

All commands use the GJSON path syntax, for more information:

Setting JSON: https://github.com/tidwall/sjson  
Getting JSON: https://github.com/tidwall/gjson

## Related Commands

[BOUNDS](../commands/bounds.md)<br>
[DEL](../commands/del.md)<br>
[DROP](../commands/drop.md)<br>
[EXPIRE](../commands/expire.md)<br>
[FSET](../commands/fset.md)<br>
[GET](../commands/get.md)<br>
**[JDEL](../commands/jdel.md)**<br>
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