<!--
layout:  index.html
title:   AOFSHRINK - Tile38
class:   command
command: aofshrink
-->

Shrinks the aof in the background. If AOFSHRINK fails, no data is lost as the original AOF will be untouched.
The shrink will only be triggered by Tile38 if there is not a shrink in process.

## Examples

```tile38
AOFSHRINK
```
