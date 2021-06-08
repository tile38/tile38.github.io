---
id: jset
title: JSET
sidebar_label: __no_label
---

## Syntax

**JSET key id path value [RAW|STR]**

## Description

Set a value in a JSON document.

## Examples

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

## Options

JSET allows a set of options that modify its behavior:

`RAW` allows `value` to be interpreted as a serialized JSON object:

```tile38-cli
SET linestrings 1 OBJECT {"type": "LineString", "coordinates": [[0, 0], [1, 1]]}
JSET linestrings 1 coordinates.-1 [2,2] RAW
JGET linestrings 1
> {"type":"LineString","coordinates":[[0,0],[1,1],[2,2]]}
```

`STR` allows `value` to be interpreted as a string:
```tile38-cli
JSET test 1 properties.bool true
JGET test 1 properties.bool
> {"value":true}

JSET test 1 properties.bool true STR
JGET test 1 properties.bool
> {"value":"true"}
```

## Path syntax

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
[JDEL](../commands/jdel.md)<br>
[JGET](../commands/jget.md)<br>
**[JSET](../commands/jset.md)**<br>
[KEYS](../commands/keys.md)<br>
[PDEL](../commands/pdel.md)<br>
[PERSIST](../commands/persist.md)<br>
[RENAME](../commands/rename.md)<br>
[RENAMENX](../commands/renamenx.md)<br>
[SET](../commands/set.md)<br>
[STATS](../commands/stats.md)<br>
[TTL](../commands/ttl.md)<br>