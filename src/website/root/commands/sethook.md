<!--
layout:  index.html
title:   SETHOOK - Tile38
class:   command
command: sethook
-->

Creates a webhook which points to a [geofenced](/topics/geofencing) search. If a hook is already associated to that name, it'll be overwritten.

## Examples

Set a simple hook.

```tile38
SETHOOK warehouse http://10.0.20.78/endpoint NEARBY fleet FENCE POINT 33.5123 -112.2693 500
```

In this example we created a webhook named `warehouse` that watches for changes to objects in the `fleet` collection. When a change occurs the endpoint `'http://10.0.20.78/endpoint'` is notified with a detailed message. The message contains a member named `'detect'` which has one of the following values:

- **`inside`** is when an object is inside the specified area.
- **`outside`** is when an object is outside the specified area.
- **`enter`** is when an object that **was not** previously in the fence has entered the area.
- **`exit`** is when an object that **was** previously in the fence has exited the area.
- **`cross`** is when an object that **was not** previously in the fence has entered **and** exited the area.

*For more information on the format of this message please see the topic on [Geofencing](/topics/geofencing).*

[NEARBY](/commands/nearby), [INTERSECTS](/commands/intersects), and [WITHIN](/commands/within) are supported search types. The `FENCE` keyword must be present.

## Endpoints

Tile38 currently supports endpoints with the **`http`**, **`https`**, **`grpc`**, **`redis`**, **`disque`** and **`kafka`** url schemes.

### HTTP / HTTPS

When using the `http://` and `https://` url scheme an HTTP POST will be sent to the specified url with the `content-type` of `application/json` and the request body containing the message.

Tile38 expects that the endpoint will respond with the status code of 200. As long as the status is 200 the message will be considered sent.

### GRPC

The `grpc://` url scheme provides support for sending messages over [GRPC](http://www.grpc.io/).

For example:

```tile38
SETHOOK warehouse grpc://10.0.20.78:6798/ ...
```

All webhook messages will be sent to the GPRC server at `10.0.20.78:6798`.

The proto file can be found in the [/hservice directory](https://github.com/tidwall/tile38/tree/master/hservice).

### Redis

The `redis://` url scheme provides support for sending messages to a [Redis](https://redis.io) server.

For example:

```tile38
SETHOOK warehouse redis://10.0.20.78:6379/warehouse ...
```

All webhook messages will be sent to the Redis server at `10.0.20.78:6379` in a [PUBSUB](https://redis.io/commands#pubsub) queue `warehouse` as a JSON messages.

### Disque

The `disque://` url scheme provides support for sending messages to a [Disque](https://github.com/antirez/disque) server.

For example:

```tile38
SETHOOK warehouse disque://10.0.20.78:7711/warehouse?replicate=2 ...
```

All webhook messages will be sent to the Disque server at `10.0.20.78:7711`. The replicate param is optional and when this value is greater than one, Tile38 will require that the Disque server to make copies of the message on N servers, where N is the value of `replicate`. Please review the [Disque API](https://github.com/antirez/disque#main-api) for information on the replicate option.

### Kafka

The `kafka://` url scheme provies support for sending messages to a [Kafka](https://kafka.apache.org/) broker.

For example:

```tile38
SETHOOK warehouse kafka://10.0.20.78:9092/warehouse
```

All webhook messages will be sent to the Kafka server at `10.0.20.78:9092` to a [topic](https://kafka.apache.org/documentation/#intro_topics) called warehouse. The port number is optional and will default to 9092.

### Endpoint Failover

It's possible to specify multiple endpoints for a webhook by separating each with a comma. Make sure that there are no spaces between the comma and the urls.

```tile38
SETHOOK warehouse http://10.0.20.78/ep1,http://10.0.20.78/ep2 ...
```

Tile38 will try to send a message to the first endpoint. If the send is a failure then the second endpoint is tried, and so on.
