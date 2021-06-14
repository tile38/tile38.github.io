---
id: healthz
title: HEALTHZ
sidebar_label: __no_label
---

## Syntax

**HEALTHZ**

## Description

Returns `OK` if server is the Leader. If server is a Follower, returns `OK` once the Follower caught up
to the Leader. For HTTP requests it returns **HTTP 200 OK** once caught up, or **HTTP 500 Internal Server Error** if not.

The command is primarily built to be send via HTTP in orchestration frameworks such as Kubernetes as
`livelinessProbe` and/or `readinessProbe`. Since a Follower has to catch up to the state of the Leader before
it can execute queries, it is essential that it does not receive traffic prior to being caught up.

**HEALTHZ** in combination with a `readinessProbe` ensures a ready state.

## Examples

```tile38-cli
HEALTHZ
```

```
// values.yaml

readinessProbe:
  httpGet:
    scheme: HTTP
    path: /healthz
    port: 9851
  initialDelaySeconds: 60
```

For more information on the availability of commands on the follower see [Replication](../topics/replication.md).

## Related Commands

[AUTH](../commands/auth.md)<br>
[OUTPUT](../commands/output.md)<br>
[PING](../commands/ping.md)<br>
**[HEALTHZ](../commands/healthz.md)**<br>
