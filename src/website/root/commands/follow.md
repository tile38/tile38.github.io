<!--
layout:  index.html
title:   FOLLOW - Tile38
class:   command
super:   documentation
command: follow
-->

The FOLLOW command instructs the Tile38 server to follow a leader and replicated the leader's data.

## Examples

```tile38
FOLLOW 10.0.1.15 9851     # Follow a leader at 10.0.1.15, port: 9851
FOLLOW no one             # Stop following
```

