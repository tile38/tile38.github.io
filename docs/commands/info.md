---
id: info
title: INFO
sidebar_label: __no_label
---

## Syntax

**INFO [section [section ...]]**

## Description

The INFO command returns information and statistics about the server in a format that is simple to parse by computers and easy to read by humans.

The optional parameter can be used to select a specific section of information:

The optional parameter can be used to select a specific section of information:

* `server`: General information about the Tile38 server
* `clients`: Client connections section
* `memory`: Memory consumption related information
* `persistence`: RDB and AOF related information
* `stats`: General statistics
* `replication`: Master/replica replication information
* `cpu`: CPU consumption statistics
* `commandstats`: Tile38 command statistics
* `latencystats`: Tile38 command latency percentile distribution statistics
* `sentinel`: Tile38 Sentinel section (only applicable to Sentinel instances)
* `cluster`: Tile38 Cluster section
* `modules`: Modules section
* `keyspace`: Database related statistics
* `errorstats`: Tile38 error statistics
It can also take the following values:

* `all`: Return all sections (excluding module generated ones)
* `default`: Return only the default set of sections
* `everything`: Includes all and modules
When no parameter is provided, the `default` option is assumed.

## Related Commands

[CONFIG GET](../commands/config-get.md)<br>
[CONFIG REWRITE](../commands/config-rewrite.md)<br>
[CONFIG SET](../commands/config-set.md)<br>
[FLUSHDB](../commands/flushdb.md)<br>
[GC](../commands/gc.md)<br>
[READONLY](../commands/readonly.md)<br>
**[INFO](../commands/info.md)**<br>
[ROLE](../commands/role.md)<br>
[SERVER](../commands/server.md)<br>