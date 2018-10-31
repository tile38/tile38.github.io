<!--
layout:  index.html
title:   AOF - Tile38
class:   command
super:   documentation
command: aof
-->

Downloads the AOF starting from pos and keeps the connection alive.  All data that is written to the AOF will also be written to the connection. This command is used for leader-follower replication.

## Examples

```tile38
AOF 12236598
```
