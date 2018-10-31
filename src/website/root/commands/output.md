<!--
layout:  index.html
title:   OUTPUT - Tile38
class:   command
super:   documentation
command: output
-->

Gets or sets the output format for the current connection.

The two possible options are [RESP](http://redis.io/topics/protocol) or [JSON](http://www.json.org).

The default format is initially auto detected based on the connection type and the first command sent. Most [Clients Libraries](/clients) will default to RESP. The [Built-in CLI](/topics/command-line-interface/) will default to JSON.


## Examples

```tile38
OUTPUT json          # all responses will now be in JSON format.
OUTPUT resp          # all responses will now be in RESP format.
```
