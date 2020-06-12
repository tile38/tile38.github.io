---
id: readonly
title: READONLY
sidebar_label: __no_label
---

## Syntax

**READONLY yes|no**

## Description

Puts the server into readonly mode. While in this mode all commands that change data will fail such as SET and DEL.

## Examples

```tile38-cli
READONLY yes    # turns on readonly mode
READONLY no     # turns off readonly mode
```

## Related Commands

[CONFIG GET](../commands/config-get.md)<br>
[CONFIG REWRITE](../commands/config-rewrite.md)<br>
[CONFIG SET](../commands/config-set.md)<br>
[FLUSHDB](../commands/flushdb.md)<br>
[GC](../commands/gc.md)<br>
**[READONLY](../commands/readonly.md)**<br>
[SERVER](../commands/server.md)<br>