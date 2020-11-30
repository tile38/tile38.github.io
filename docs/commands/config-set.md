---
id: config-set
title: CONFIG SET
sidebar_label: __no_label
---

## Syntax

**CONFIG SET parameter [value]**

## Description

The CONFIG SET command is used to set special configuration properties.  These properties will not persist until the [CONFIG REWRITE](../commands/config-rewrite.md) is called.

## Examples
```tile38-cli
CONFIG SET requirepass mypass   # set a password for the AUTH command.
```

## Related Commands

[CONFIG GET](../commands/config-get.md)<br>
[CONFIG REWRITE](../commands/config-rewrite.md)<br>
**[CONFIG SET](../commands/config-set.md)**<br>
[FLUSHDB](../commands/flushdb.md)<br>
[GC](../commands/gc.md)<br>
[READONLY](../commands/readonly.md)<br>
[SERVER](../commands/server.md)<br>