---
id: installation
title: Installation
sidebar_label: Installation
---



## Docker

```plaintext
docker pull tile38/tile38
docker run -p 9851:9851 tile38/tile38
```

Visit the [Tile38 Docker Hub Page](https://hub.docker.com/r/tile38/tile38/) for more information.

## Homebrew (macOS)

```plaintext
brew install tile38
tile38-server
```

## Packages (linux)

```plaintext
pkg install tile38
```

## MacPorts (macOS)

```plaintext
make -C /usr/ports/databases/tile38 install
```

## Release Builds

Tile38 has pre-built release binaries for OSX, Linux, FreeBSD, and Windows. Instructions for using these binaries are on the GitHub [releases page](https://github.com/tidwall/tile38/releases).


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



# Next steps

If not already started, start the Tile38 with:

```plaintext
tile38-server
```

You can interact with Tile38 using the built-in client:

```tile38-cli
tile38-cli
tile38> SET fleet truck1 POINT 33.5123 -112.2693
tile38> GET fleet truck1
```
