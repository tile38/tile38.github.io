---
id: script-exists
title: SCRIPT EXISTS
sidebar_label: __no_label
---

## Syntax

**SCRIPT EXISTS sha1 ...**

## Description

Returns information about the existence of the scripts in server cache.

This command takes one or more SHA1 digests and returns a list of one/zero integer values to indicate whether or not each SHA1 exists in the server script cache.

Scripts are cached using the [SCRIPT LOAD](../commands/script-load.md) command.

See [EVAL](../commands/eval.md) for more details on Lua scripting.

## Related Commands

[EVAL](../commands/eval.md)<br>
[EVALNA](../commands/evalna.md)<br>
[EVALNASHA](../commands/evalnasha.md)<br>
[EVALRO](../commands/evalro.md)<br>
[EVALROSHA](../commands/evalrosha.md)<br>
[EVALSHA](../commands/evalsha.md)<br>
**[SCRIPT EXISTS](../commands/script-exists.md)**<br>
[SCRIPT FLUSH](../commands/script-flush.md)<br>
[SCRIPT LOAD](../commands/script-load.md)<br>