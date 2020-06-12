<!--
layout:  index.html
title:   KEYS - Tile38
class:   command
super:   documentation
command: keys
-->

Returns all keys matching `pattern`.

Supported [glob-style patterns](https://en.wikipedia.org/wiki/Glob_(programming)):

- h?llo matches hello, hallo and hxllo
- h*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo

## Examples

```tile38
KEYS *         # return all keys
KEYS fleet:*   # return all keys that have the prefix with 'fleet:'
```
