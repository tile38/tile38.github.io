---
id: stats
title: STATS
sidebar_label: __no_label
---

## Syntax

**STATS key [key...]**

## Description

Return stats for one or more keys.

## Examples

```tile38-cli
STATS fleet1 fleet2   # return key stats for 'fleet' and 'fleet2'
```


## Returns 

The `stats` array will contain one entry for each key requested. If the key is not found then the entry will be `null`.

- `in_memory_size`: The estimated memory size in bytes that the key is using.
- `num_objects`: The object count.
- `num_points`: The total number of latitude, longitude coordinates in the key. This will always be equal to or greater than `num_objects`.


```json
{
    "ok": true,
    "stats": [{
        "in_memory_size": 4823028,
        "num_objects": 26343,
        "num_points": 350929,
    },{
        "in_memory_size": 36552218,
        "num_objects": 162341,
        "num_points": 1029938
    }],
    "elapsed": "27.677µs"
}
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
[RENAMENX](../commands/renamenx.md)<br>
[SET](../commands/set.md)<br>
**[STATS](../commands/stats.md)**<br>
[TTL](../commands/ttl.md)<br>