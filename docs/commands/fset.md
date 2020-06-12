---
id: fset
title: FSET
sidebar_label: __no_label
---

## Syntax

**FSET key id [XX] field value [field value ...]**

## Description

Set the value for one or more fields of an id.
Fields are double precision floating points.

Return value is the integer count of how many fields actually changed their values.

## Examples

Set a field named `speed` to `16` and a field named `wheels` to 8 for `truck1`.

```tile38-cli
FSET fleet truck1 speed 16 wheels 8
```

## Options

Normally, `FSET` will return an error if the field is being set on a non-existent id.  However, the option `XX` can alter this behavior.  Specifically, if called with `XX` option, `FSET` will return `0` when called on a non-existend id.

Note that the non-existent key will still cause an error!

## Related Commands

[BOUNDS](../commands/bounds.md)<br>
[DEL](../commands/del.md)<br>
[DROP](../commands/drop.md)<br>
[EXPIRE](../commands/expire.md)<br>
**[FSET](../commands/fset.md)**<br>
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