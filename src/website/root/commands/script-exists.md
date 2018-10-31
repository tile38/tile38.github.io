<!--
layout:  index.html
title:   SCRIPT EXISTS - Tile38
class:   command
super:   documentation
command: script exists
-->

Returns information about the existence of the scripts in server cache.

This command takes one or more SHA1 digests and returns a list of one/zero integer values to indicate whether or not each SHA1 exists in the server script cache.

Scripts are cached using the [SCRIPT LOAD](/commands/script-load) command.

See [EVAL](/commands/eval) for more details on Lua scripting.
