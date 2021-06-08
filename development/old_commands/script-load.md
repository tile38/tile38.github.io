<!--
layout:  index.html
title:   SCRIPT LOAD - Tile38
class:   command
super:   documentation
command: script load
-->

Loads the compiled version of a script into the server cache, without executing.

If the parsing and compilation is successful, the command returns the string value of the SHA1 digest of the script.  That value can be used for [EVALSHA](/commands/evalsha) and similar commands that execute scripts based on the SHA1 digest.

The script will stay in cache until either the tile38 is restarted or [SCRIPT FLUSH](/commands/script-flush) is called.

If either parsing or compilation fails, the command will return the error response with the detailed traceback of the Lua failure.

See [EVAL](/commands/eval) for more details on Lua scripting.
