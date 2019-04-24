<!--
layout:  index.html
title:   TIMEOUT - Tile38
class:   command
super:   documentation
command: timeout
-->

Gets or sets the query timeout for the current connection.

If a numeric argument is given after the `TIMEOUT`, it will be set as timeout (in seconds) for the future queries
on this connection.  To unset the existing timeout value, set it to 0.

If no argument is given, the command will report the currently set timeout, in seconds.

## Examples

```tile38
> TIMEOUT       # request the current timeout
"0"             # 0 means timeout is not set

> TIMEOUT 0.25  # set the timeout to 0.25 sec
OK

> TIMEOUT       # request the current timeout
"0.25"
```

Note: the only commands respecting the timeout are the scan/search commands:
* `SCAN`
* `SEARCH`
* `INTERSECTS`
* `WITHIN`
* `NEARBY`

All others commands will ignore the timeout set on the connection.
