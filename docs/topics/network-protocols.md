---
id: network-protocols
title: Network Protocols
sidebar_label: Network Protocols
---



It's recommended to use a [client library](../topics/client-libraries.md) or the [Tile38 CLI](../topics/command-line-interface.md), but there are times when only HTTP is available or when you need to test from a remote terminal. In those cases we provide an HTTP and telnet options.

## HTTP

One of the simplest ways to call a tile38 command is to use HTTP. From the command line you can use [curl](https://curl.haxx.se/). For example:

```plaintext
# call with request in the body
curl --data "set fleet truck3 point 33.4762 -112.10923" localhost:9851

# call with request in the url path
curl localhost:9851/set+fleet+truck3+point+33.4762+-112.10923
```

## Websockets

Websockets can be used when you need to Geofence and keep the connection alive. It works just like the HTTP example above, with the exception that the connection stays alive and the data is sent from the server as text websocket messages.

## Telnet

There is the option to use a plain telnet connection. The default output through telnet is [RESP](http://redis.io/topics/protocol).

```plaintext
telnet localhost 9851
set fleet truck3 point 33.4762 -112.10923
+OK

```

The server will respond in [JSON](http://json.org) or [RESP](http://redis.io/topics/protocol) depending on which protocol is used when initiating the first command.

- HTTP and Websockets use JSON.
- Telnet and RESP clients use RESP.
