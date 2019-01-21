<!--
layout:  index.html
title:   Getting Started - Tile38
class:   topic
super:   download
-->


# Getting Started

## Docker 

```tile38-cli
docker pull tile38/tile38
docker run -p 9851:9851 tile38/tile38
```

Visit the [Tile38 Docker Hub Page](https://hub.docker.com/r/tile38/tile38/) for more information.

## Homebrew (macOS)

```tile38-cli
brew install tile38
tile38-server
```

## Packages (linux)

```tile38-cli
pkg install tile38
```

## MacPorts (macOS)

```tile38-cli
make -C /usr/ports/databases/tile38 install
```

## Release Builds

Tile38 has pre-built release binaries for OSX, Linux, FreeBSD, and Windows. Instructions for using these binaries are on the GitHub [releases page](https://github.com/tidwall/tile38/releases).


# Next steps

If not already started, start the Tile38 with:

```tile38-cli
tile38-server
```

You can interact with Tile38 using the built-in client:

```tile38-cli
tile38-cli
tile38> SET fleet truck1 POINT 33.5123 -112.2693
tile38> GET fleet truck1
```
