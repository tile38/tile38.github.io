<!--
layout:  index.html
title:   STATS - Tile38
class:   command
super:   documentation
command: stats
-->

Return stats for one or more keys.

## Examples

```tile38
STATS fleet1 fleet2   # return key stats for 'fleet' and 'fleet2'
```


## Returns 

The `stats` array will contain one entry for each key requested. If the key is not found then the entry will be `null`.

- `in_memory_size`: The estimated memory size in bytes that the key is using.
- `num_objects`: The object count.
- `num_points`: The total number of latitude, longitude coordinates in the key. This will always be equal to or greater than `num_objects`.


```tile38-json
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

