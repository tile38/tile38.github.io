---
id: follow
title: FOLLOW
sidebar_label: __no_label
---

## Syntax

**FOLLOW host port**

## Description

The FOLLOW command instructs the Tile38 server to follow a leader and replicated the leader's data.

## Examples

```tile38-cli
FOLLOW 10.0.1.15 9851     # Follow a leader at 10.0.1.15, port: 9851
FOLLOW no one             # Stop following
```

## Related Commands

[AOF](../commands/aof.md)<br>
[AOFMD5](../commands/aofmd5.md)<br>
[AOFSHRINK](../commands/aofshrink.md)<br>
**[FOLLOW](../commands/follow.md)**<br>