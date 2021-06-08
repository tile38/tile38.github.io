<!--
layout:  index.html
title:   READONLY - Tile38
class:   command
super:   documentation
command: readonly
-->

Puts the server into readonly mode. While in this mode all commands that change data will fail such as SET and DEL.

## Examples

```tile38
READONLY yes    # turns on readonly mode
READONLY no     # turns off readonly mode
```
