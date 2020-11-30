<!--
layout:  index.html
title:   RENAME - Tile38
class:   command
super:   documentation
command: rename
-->

Renames collection `key` to `newkey`. If `newkey` already exists, it
will be deleted prior to renaming.

Returns "OK" for success or "ERR" when `key` or `newkey` are actively being
used by a geofence or webhook.

## Examples

```tile38
RENAME fleet fleet2
```
