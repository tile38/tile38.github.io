<!--
layout:  index.html
title:   CONFIG SET - Tile38
class:   command
super:   documentation
command: config set
-->

The CONFIG SET command is used to set special configuration properties.  These properties will not persist until the [CONFIG REWRITE](/commands/config-rewrite) is called.

## Examples
```tile38
CONFIG SET requirepass mypass   # set a password for the AUTH command.
```
