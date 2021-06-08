---
id: script-load
title: SCRIPT LOAD
sidebar_label: __no_label
---

## Syntax

**SCRIPT LOAD script**

## Description

Loads the compiled version of a script into the server cache, without executing.

If the parsing and compilation is successful, the command returns the string value of the SHA1 digest of the script.  That value can be used for [EVALSHA](../commands/evalsha.md) and similar commands that execute scripts based on the SHA1 digest.

The script will stay in cache until either the tile38 is restarted or [SCRIPT FLUSH](../commands/script-flush.md) is called.

If either parsing or compilation fails, the command will return the error response with the detailed traceback of the Lua failure.

See [EVAL](../commands/eval.md) for more details on Lua scripting.

## Related Commands

[EVAL](../commands/eval.md)<br>
[EVALNA](../commands/evalna.md)<br>
[EVALNASHA](../commands/evalnasha.md)<br>
[EVALRO](../commands/evalro.md)<br>
[EVALROSHA](../commands/evalrosha.md)<br>
[EVALSHA](../commands/evalsha.md)<br>
[SCRIPT EXISTS](../commands/script-exists.md)<br>
[SCRIPT FLUSH](../commands/script-flush.md)<br>
**[SCRIPT LOAD](../commands/script-load.md)**<br>