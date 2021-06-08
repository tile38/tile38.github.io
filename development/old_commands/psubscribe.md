<!--
layout:  index.html
title:   PSUBSCRIBE - Tile38
class:   command
super:   documentation
command: psubscribe
-->


Subscribes the client to the given patterns.

Supported [glob-style patterns](https://en.wikipedia.org/wiki/Glob_(programming)):

- h?llo matches hello, hallo and hxllo
- h*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo
