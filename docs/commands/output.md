---
id: output
title: OUTPUT
sidebar_label: __no_label
---

## Syntax

**OUTPUT [json|resp]**

## Description

Gets or sets the output format for the current connection.

The two possible options are [RESP](http://redis.io/topics/protocol) or [JSON](http://www.json.org).

The default format is initially auto detected based on the connection type and the first command sent. Most [Client Libraries](../topics/client-libraries.md) will default to RESP. The [Built-in CLI](../topics/command-line-interface/) will default to JSON.

## Examples

```tile38-cli
OUTPUT json          # all responses will now be in JSON format.
OUTPUT resp          # all responses will now be in RESP format.
```

## Related Commands

[AUTH](../commands/auth.md)<br>
**[OUTPUT](../commands/output.md)**<br>
[PING](../commands/ping.md)<br>
[QUIT](../commands/quit.md)<br>
[TIMEOUT](../commands/timeout.md)<br>