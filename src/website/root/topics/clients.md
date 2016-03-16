<!--
layout:  index.html
title:   Network Protocol and Clients - Tile38
class:   topic
-->

Network Protocol
---

It's recommended to use the [native interface](#native-interface), but there are times when only HTTP is available or when you need to test from a remote terminal. In those cases we provide an HTTP and telnet options.

### HTTP
One of the simplest ways to call a tile38 command is to use HTTP. From the command line you can use [curl](https://curl.haxx.se/). For example:

```tile38-cli
# call with request in the body
curl --data "set fleet truck3 point 33.4762 -112.10923" localhost:9851

# call with request in the url path
curl localhost:9851/set+fleet+truck3+point+33.4762+-112.10923
```

### Websockets
Websockets can be used when you need to Geofence and keep the connection alive. It works just like the HTTP example above, with the exception that the connection stays alive and the data is sent from the server as text websocket messages.

### Telnet
There is the option to use a plain telnet connection.

```tile38-cli
telnet localhost 9851
SET fleet truck3 POINT 33.4762 -112.10923
{"ok":true,"elapsed":"18.73µs"}
```

### Native interface

The native interface is very simple. A single message is composed of:  

```tile38-c
$ + TEXT_DATA_SIZE + SPACE + DATA + CRLF
```

So the request message:

```tile38
GET fleet truck1
```

Should be sent to the server as (without quotes):

```tile38-c
"$16 GET fleet truck1\r\n"
```

The server will always respond in JSON, and will include the top level member `ok`. When `ok` is `false` there will also be an accompanied `err` member describing the problem. In nearly every response there will also be an `elapsed` member that is the duration of time that it took to process the request on the server. For more information on this string please refer to the [time.Duration](https://golang.org/pkg/time/#Duration) Go documentation.

So the response message:

```tile38-json
{"ok":true,"elapsed":"37.829µs"}
```

Will be sent to the client as (without quotes):

```tile38-c
"$32 {"ok":true,"elapsed":"37.829µs"}\r\n"
```

## Clients
Currently we have one client written in Go. Though it should be straight forward to write one in your language of choice.

- [Go](https://github.com/tidwall/tile38/tree/master/client)
