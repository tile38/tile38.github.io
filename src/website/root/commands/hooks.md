<!--
layout:  index.html
title:   HOOKS - Tile38
class:   command
super:   documentation
command: hooks
-->

Returns all hooks matching `pattern`.

Supported [glob-style patterns](https://en.wikipedia.org/wiki/Glob_(programming)):

- h?llo matches hello, hallo and hxllo
- h*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo

## Examples

```tile38
HOOKS *             # return all hooks
HOOKS warehouse:*   # return all hooks that have the prefix with 'warehouse:'
```
