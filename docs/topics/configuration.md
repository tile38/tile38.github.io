---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## Usage

```plaintext
Usage: tile38-server [-p port]
Basic Options:
  -h hostname : listening host
  -p port     : listening port (default: 9851)
  -d path     : data directory (default: data)
  -s socket   : listen on unix socket file
  -l encoding : set log encoding to json or text (default: text) 
  -q          : no logging. totally silent output
  -v          : enable verbose logging
  -vv         : enable very verbose logging

Advanced Options: 
  --pidfile path          : file that contains the pid
  --appendonly yes/no     : AOF persistence (default: yes)
  --appendfilename path   : AOF path (default: data/appendonly.aof)
  --queuefilename path    : Event queue path (default:data/queue.db)
  --http-transport yes/no : HTTP transport (default: yes)
  --protected-mode yes/no : protected mode (default: yes)
  --nohup                 : do not exit on SIGHUP

Developer Options:
  --dev                             : enable developer mode
  --webhook-http-consumer-port port : Start a test HTTP webhook server
  --webhook-grpc-consumer-port port : Start a test GRPC webhook server
```

## Configuration File

By default `tile38-server` creates `data/` directory, and in it a `config` file. If a `config` is present in the directory, `tile38-server` will attempt to use it on start-up.

| options | description |
|--|--|
| `requirepass`| Set a password and make server password-protected, defaults to: `""` (no password)|
| `leaderauth` | If leader is password-protected, followers have to authenticate before they are allowed to follow. |
| `protected-mode` | Tile38 only allows authenticated clients or connections from `localhost`. Defaults to: `"yes"` |
| `maxmemory` | Set max memory in bytes. Get max memory in bytes/kb/mb/gb. |
| `autogc` | Set auto garbage collection to time in seconds where server performs a garbage collection. Defaults to: `0` (no garbage collection) |
| `keep_alive` | Time server keeps client connections alive. Defaults to: `300` (seconds) |
| `follow_host` | URI of Leader to follow |
| `follow_port` | PORT of Leader to follow |
| `follow_pos` | Follow from a specific point in the `appendonly.aof` |
| `follow_id` | ID of Leader |
| `server_id` | Server ID of the current instance |
| `read_only` | Make Tile38 read-only |
| `logconfig`| [zap.Config](https://pkg.go.dev/go.uber.org/zap#Config) in json format |

### Example

**Leader configuration**

`tile38-server -d data-dir-leader/ -h localhost -p 1337`

```plaintext
# data-dir-leader/config

{
  "maxmemory": "2gb",
  "requirepass": "super-secret-leader-password"
}
```

**Follower configuration**

`tile38-server -d data-dir-follower/ -h localhost -p 1333`

```plaintext
# data-dir-follower/config

{
  "follow_host": "localhost",
  "follow_port": 1337,
  "leaderauth": "super-secret-leader-password"
}
```

This will start a Tile38 leader/writer instance on `localhost:1337` with a required password of `super-secret-leader-password`. Upon successful start-up of the Tile38 leader, the
a follower is started, picks up the config and connects to the Tile38 leader instance. More on replication in general, see [here](../topics/replication.md).


## Logging

With [v1.27.0](https://github.com/tidwall/tile38/releases/tag/1.27.0) Tile38 introduced the option to enable structured json logs using [zap](https://pkg.go.dev/go.uber.org/zap) if `-l json` (defaults to `text` logs) is passed on start-up.
If a [zap.Config](https://pkg.go.dev/go.uber.org/zap#Config) is present in the `logconfig` child of the configuration file, Tile38 will use it. If no custom configuration is provided, it'll fallback to 
a [default configuration](https://pkg.go.dev/go.uber.org/zap#NewProductionConfig). The `level` of either is overwritten to `debug` to allow backward compatibility with text logging and and its respective log levels.

| option | description |
|--|--|
| `-q` | no logging. totally silent output |
| `-v` | enable verbose logging |
| `-vv` | enable very verbose logging |

### Example

`tile38-server -h localhost -p 1337 -l json `

```plaintext
# data/config with custom logconfig

{
  "maxmemory": "2gb",
  "logconfig": {
    "level": "debug",
    "encoding": "json", 
    "outputPaths": ["stdout"],
    "errorOutputPaths": ["stderr"],
    "encoderConfig": {
      "messageKey": "message",
      "levelKey": "level",
      "levelEncoder": "lowercase"
    }
  }
}
```

## Prometheus Metrics
Tile38 can natively export Prometheus metrics by setting the `--metrics-addr` command line flag (disabled by default). This example exposes the HTTP metrics server on port 4321:
```plaintext
# start server and enable Prometheus metrics, listen on local interface only
./tile38-server --metrics-addr=127.0.0.1:4321

# access metrics
curl http://127.0.0.1:4321/metrics
```
If you need to access the `/metrics` endpoint from a different host you'll have to set the flag accordingly, e.g. set it to `0.0.0.0:<<port>>` to listen on all interfaces.

Use the [redis_exporter](https://github.com/oliver006/redis_exporter) for more advanced use cases like extracting key values or running a lua script.
