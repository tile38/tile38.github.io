---
id: evalnasha
title: EVALNASHA
sidebar_label: __no_label
---

## Syntax

**EVALNASHA sha1 numkeys [key ...] [arg ...]**

## Description

Evaluates, in a non-atomic fashion, a Lua script cached on the server by its SHA1 digest. Scripts are cached using the [SCRIPT LOAD](../commands/script-load.md) command.  The command is otherwise identical to [EVALNA](../commands/evalna.md).

## Related Commands

[EVAL](../commands/eval.md)<br>
[EVALNA](../commands/evalna.md)<br>
**[EVALNASHA](../commands/evalnasha.md)**<br>
[EVALRO](../commands/evalro.md)<br>
[EVALROSHA](../commands/evalrosha.md)<br>
[EVALSHA](../commands/evalsha.md)<br>
[SCRIPT EXISTS](../commands/script-exists.md)<br>
[SCRIPT FLUSH](../commands/script-flush.md)<br>
[SCRIPT LOAD](../commands/script-load.md)<br>