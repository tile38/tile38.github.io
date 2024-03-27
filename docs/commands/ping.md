---
id: ping
title: PING
sidebar_label: __no_label
---

## Syntax

**PING [echo]**

## Description

Ping the server. The response will contain `"pong"` unless `echo` is provided, in which case `echo` will be sent back.


## Examples

```tile38-cli
PING
PING 1234
```

## Related Commands

[AUTH](../commands/auth.md)<br>
[OUTPUT](../commands/output.md)<br>
**[PING](../commands/ping.md)**<br>
[QUIT](../commands/quit.md)<br>
[TIMEOUT](../commands/timeout.md)<br>