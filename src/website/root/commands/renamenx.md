<!--
layout:  index.html
title:   RENAMENX - Tile38
class:   command
super:   documentation
command: renamenx
-->

Renames `key` to be stored under a new name, it it does not exist yet.

If `newkey` already exists, this command does nothing.

Returns 1 if `key` was renamed to `newkey`, and 0 if `newkey` already existed.

## Examples

```tile38
RENAMENX fleet fleet2
```
