---
id: aofshrink
title: AOFSHRINK
sidebar_label: __no_label
---

## Syntax

**AOFSHRINK**

## Description

Shrinks the aof in the background. If AOFSHRINK fails, no data is lost as the original AOF will be untouched.
The shrink will only be triggered by Tile38 if there is not a shrink in process.

## Examples

```tile38-cli
AOFSHRINK
```

## Related Commands

[AOF](../commands/aof.md)<br>
[AOFMD5](../commands/aofmd5.md)<br>
**[AOFSHRINK](../commands/aofshrink.md)**<br>
[FOLLOW](../commands/follow.md)<br>