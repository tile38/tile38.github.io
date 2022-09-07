---
id: sethook
title: SETHOOK
sidebar_label: __no_label
---

## Syntax

**SETHOOK name endpoint [META name value ...] [EX seconds] NEARBY|WITHIN|INTERSECTS key FENCE [DETECT what] [COMMANDS which] param [param...]**

## Description

Creates a webhook which points to a [geofenced](../topics/geofencing.md) search. If a hook is already associated to that name, it'll be overwritten.

## Examples

Set a simple hook.

```tile38-cli
SETHOOK warehouse http://10.0.20.78/endpoint NEARBY fleet FENCE POINT 33.5123 -112.2693 500
```

In this example we created a webhook named `warehouse` that watches for changes to objects in the `fleet` collection. When a change occurs the endpoint `'http://10.0.20.78/endpoint'` is notified with a detailed message. The message contains a member named `'detect'` which has one of the following values:

- **`inside`** is when an object is inside the specified area.
- **`outside`** is when an object is outside the specified area.
- **`enter`** is when an object that **was not** previously in the fence has entered the area.
- **`exit`** is when an object that **was** previously in the fence has exited the area.
- **`cross`** is when an object that **was not** previously in the fence has entered **and** exited the area.

_For more information on the format of this message please see the topic on [Geofencing](../topics/geofencing.md)._

[NEARBY](../commands/nearby.md), [INTERSECTS](../commands/intersects.md), and [WITHIN](../commands/within.md) are supported search types. The `FENCE` keyword must be present.

## Endpoints

Tile38 currently supports endpoints with the following services:

- [http](#http--https)
- [https](#http--https)
- [gRPC](#grpc)
- [Redis](#redis)
- [Disque](#disque)
- [Kafka](#kafka)
- [AMQP](#amqp)
- [MQTT](#mqtt)
- [NATS](#nats)
- [Amazon SQS](#sqs)
- [Azure Event Hub](#azure-event-hub)
- [Google Pubsub](#google-pubsub)


### HTTP / HTTPS

When using the `http://` and `https://` url scheme an HTTP POST will be sent to the specified url with the `content-type` of `application/json` and the request body containing the message.

Tile38 expects that the endpoint will respond with the status code of 200. As long as the status is 200 the message will be considered sent.

### GRPC

The `grpc://` url scheme provides support for sending messages over [GRPC](http://www.grpc.io/).

For example:

```tile38-cli
SETHOOK warehouse grpc://10.0.20.78:6798/ ...
```

All webhook messages will be sent to the GPRC server at `10.0.20.78:6798`.

The proto file can be found in the [/hservice](https://github.com/tidwall/tile38/tree/master/internal/hservice) directory.

### Redis

The `redis://` url scheme provides support for sending messages to a [Redis](https://redis.io) server.

For example:

```tile38-cli
SETHOOK warehouse redis://10.0.20.78:6379/warehouse ...
```

All webhook messages will be sent to the Redis server at `10.0.20.78:6379` in a [PUBSUB](https://redis.io/commands#pubsub) queue `warehouse` as a JSON messages.

### Disque

The `disque://` url scheme provides support for sending messages to a [Disque](https://github.com/antirez/disque) server.

For example:

```tile38-cli
SETHOOK warehouse disque://10.0.20.78:7711/warehouse?replicate=2 ...
```

All webhook messages will be sent to the Disque server at `10.0.20.78:7711`. The replicate param is optional and when this value is greater than one, Tile38 will require that the Disque server to make copies of the message on N servers, where N is the value of `replicate`. Please review the [Disque API](https://github.com/antirez/disque#main-api) for information on the replicate option.

### Kafka

The `kafka://` url scheme provides support for sending messages to a [Kafka](https://kafka.apache.org/) broker.

For example:

```tile38-cli
SETHOOK warehouse kafka://10.0.20.78:9092/warehouse ...
```

All webhook messages will be sent to the Kafka server at `10.0.20.78:9092` to a [topic](https://kafka.apache.org/documentation/#intro_topics) called warehouse. The port number is optional and will default to 9092.

#### Options

- `auth` - `sasl`, `tls`
- `ssl` - `true`
- `sha256` - `true`
- `sha512` - `true`
- `cacert` - `path/to/ca.crt`
- `cert` - `path/to/user.crt`
- `key` - `path/to/user.key`

#### Authentication

Tile38 currently supports SASL/PLAIN, SASL/SCRAM and TLS authentication with
your Apache Kafka broker.

##### SASL 

Add `KAFKA_USERNAME` and `KAFKA_PASSWORD` to your environment. 
If `&ssl=true` is set, then by default Tile38 will try to verify the server certificate with your host CA set. 
You can present a custom certificate with `&cacert=` but do not forget to mount it
into your Tile38 leader volume.

Then you can set the hook as follows:

```
# SASL/PLAIN without SSL
SETHOOK warehouse kafka://10.0.20.78:9092/warehouse?auth=sasl ...
```

```
# SASL/PLAIN with SSL
SETHOOK warehouse kafka://10.0.20.78:9092/warehouse?auth=sasl&ssl=true ...
```

```
# SASL/SCRAM with SSL
SETHOOK warehouse kafka://10.0.20.78:9092/warehouse?auth=sasl&sha512=true&ssl=true ...

# or sha256 respectively
SETHOOK warehouse kafka://10.0.20.78:9092/warehouse?auth=sasl&sha512=true&ssl=true ...
```

##### TLS

By default Tile38 will try to verify the server certificate with your host CA set. 
If you have a custom server certificate, you can present it with `&cacert=`.
Make sure that the root certificate of your broker as well as the user certificate
and the key are mounted into the Tile38 leader instance. 
TLS does not require you to set `&ssl=true` because SSL is implied.

Then setup as follows:

```
SETHOOK warehouse kafka://10.0.20.78:9092/warehouse?auth=tls&cacert=path/to/ca.crt&cert=/path/to/user.crt&key=/path/to/user.key ...
```

### AMQP

The `amqp://` url scheme provides support for sending messages to a [RabbitMQ](https://www.rabbitmq.com/) broker via the Advanced Message Queuing Protocol (AMQP) version 0.9.1.

For example:

```tile38-cli
SETHOOK warehouse amqp://guest:guest@10.0.20.78:5672/warehouse?route=tile ...
```

All webhook messages will be sent to the RabbitMQ broker at `10.0.20.78:5672` to the queue called warehouse. Route is an optional parameter and will default to tile38.

#### Options

The following optional parameters are available for this hook, the listed value is the default value:

- `type` - 'direct'
- `durable` - true
- `immediate` - false
- `mandatory` - false
- `auto_delete` - false
- `internal` - false
- `no_wait` - false
- `delivery_mode` - 1
- `route` - tile38

### MQTT

The `mqtt://` url scheme provides support for sending messages to a MQTT broker

For example:

```tile38-cli
SETHOOK warehouse mqtt://10.0.1.1:8443/mytopic?qos=1&retained=0 ...
```

All webhook messages will be sent to the MQTT broker at `10.0.1.1:8443` to the topic called mytopic.

#### Options

The following optional parameters are available for this hook, the listed value is the default value:

- `qos` - 0
- `retained` - false
- `cacert` - empty string
- `cert` - empty string
- `key` - empty string

### SQS

Sending to [SQS](https://aws.amazon.com/sqs/) requires the URL endpoint that AWS provides.

For example:

```tile38-cli
SETHOOK warehouse https://sqs.us-east-1.amazonaws.com/349840735605/myqueue ...
```

All webhook messages will be sent to the SQS queue named `myqueue` in the region `us-east-1` with the queue id `349840735605`.

SQS credentials will be automatically chosen from one of the following:

- ~/.aws/credentials
- Environment variables
- EC2 Role

#### Options

The following optional parameters are available for this hook, the listed value is the default value:

- `credpath` - empty string
- `credprofile` - empty string
- `createqueue` - false

The `createqueue` param will attempt to create the queue if does not exist.

### NATS

The `nats://` url scheme provides support for sending messages to a [NATS](https://www.nats.io/) topic

For example:

```tile38-cli
SETHOOK warehouse nats://127.0.0.1:42222/mytopic?user=admin?pass=123 ...
```

All webhook messages will be sent to the NATS server at `127.0.0.1:4222` to the topic named `mytopic` and the username `admin` and password `123`

#### Options

The following optional parameters are available for this hook, the listed value is the default value:

- `user` - empty string
- `pass` - empty string

### Azure Event Hub

Messages can be sent to an [Azure Event Hub](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about) by specifying the Event Hub connection string. 

For example: 

```tile38-cli
SETHOOK warehouse Endpoint=sb://event-hub-namespace.windows.net/;SharedAccessKeyName=sharedAccessKeyName;SharedAccessKey=***Secret***;EntityPath=event-hub-name ...
```

All webhook messages will be sent to the Event Hub in namespace `event-hub-namespace` to the Event Hub `event-hub-name`.

The connection string can be found from the Azure Portal blade for the Event Hub in question. Validation will fail if any of the connection string elements (Endpoint, SharedAccessKeyName, SharedAccessKey or EntityPath) are missing or not in the order shown in the example. 

### Google Pubsub

Messages can be sent to a [Google Pubsub](https://cloud.google.com/pubsub/) endpoint.

For example:

```tile38-cli
SETHOOK warehouse pubsub://my-gcp-project:my-topic?credpath=/path/to/creds/key.json NEARBY fleet FENCE POINT 33.5123 -112.2693 500
```

### Endpoint Failover

It's possible to specify multiple endpoints for a webhook by separating each with a comma. Make sure that there are no spaces between the comma and the urls.

```tile38-cli
SETHOOK warehouse http://10.0.20.78/ep1,http://10.0.20.78/ep2 ...
```

Tile38 will try to send a message to the first endpoint. If the send is a failure then the second endpoint is tried, and so on.

## Related Commands

[DELHOOK](../commands/delhook.md)<br>
[HOOKS](../commands/hooks.md)<br>
[PDELHOOK](../commands/pdelhook.md)<br>
**[SETHOOK](../commands/sethook.md)**<br>

