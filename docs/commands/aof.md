---
id: aof
title: AOF
sidebar_label: __no_label
---

## Syntax

**AOF pos**

## Description

Downloads the AOF starting from pos and keeps the connection alive.  All data that is written to the AOF will also be written to the connection. This command is used for leader-follower replication.

## Examples

```tile38-cli
AOF 12236598
```

## Related Commands

**[AOF](../commands/aof.md)**<br>
[AOFMD5](../commands/aofmd5.md)<br>
[AOFSHRINK](../commands/aofshrink.md)<br>
[FOLLOW](../commands/follow.md)<br>