---
id: timeout
title: TIMEOUT
sidebar_label: TIMEOUT
---

<!--
layout:  index.html
title:   TIMEOUT - Tile38
class:   command
super:   documentation
command: timeout
-->

Runs the following command with the timeout.

If the command takes longer than the specified timeout (in seconds), it will be aborted
and the timeout error returned.

Attempting to set a timeout on a write command will result in error.

Note: at this point, the only commands respecting the timeout are the scan/search commands
(`SCAN`, `SEARCH`, `INTERSECTS`, `WITHIN`, `NEARBY`) as well as scripting commands
(`EVAL`, `EVALRO`, `EVALNA`, `EVALSHA`, `EVALROSHA`, `EVALNASHA`).

All others commands will ignore the timeout set on the connection.

## Examples

```tile38

> TIMEOUT 1 SCAN mykey WHERE foo 1 2 COUNT
(integer) 1234

> TIMEOUT 0.001 SCAN mykey WHERE foo 1 2 COUNT
(error) ERR timeout

> TIMEOUT 0.25 SET mykey myval STRING foo
(error) ERR timeout not supported for 'set'

> TIMEOUT 0.25 EVAL 'return 2*3' 0
(integer) 6

> TIMEOUT 0.25 EVAL 'local clock = os.clock; local function sleep(n) local t0 = clock(); while clock() - t0 <= n do end end sleep(1)' 0
(error) ERR timeout

> TIMEOUT 0.25 EVAL "return tile38.call('SCAN', KEYS[1], 'WHERE', 'foo', 1, 2, 'COUNT')" 1 mykey
(integer) 0

> TIMEOUT 0.25 EVAL "return tile38.call('TIMEOUT', 0.01, 'SCAN', KEYS[1], 'WHERE', 'foo', 1, 2, 'COUNT')" 1 mykey
(integer) 0

> EVAL "return tile38.call('TIMEOUT', 1, 'SET', KEYS[1], 'myval', 'STRING', 'foo')" 1 mykey
  (error) ERR f_68e06edee55806973f923ec8283dadfbbdb0d033:1: ERR timeout not supported for 'set'
  stack traceback:
    [G]: in function 'call'
    f_68e06edee55806973f923ec8283dadfbbdb0d033:1: in main chunk
    [G]: ?
```
