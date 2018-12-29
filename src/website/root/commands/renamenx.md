<!--
layout:  index.html
title:   RENAMENX - Tile38
class:   command
super:   documentation
command: renamenx
-->

Renames collection `key` to `newkey`, if it does not exist yet. If 
`newkey` already exists, this command does nothing.

Returns 1 if `key` was renamed to `newkey`, 0 if `newkey` already existed, or 
"ERR" when `key` or `newkey` are actively being used by a geofence or webhook.

## Examples

```tile38
RENAMENX fleet fleet2
```
