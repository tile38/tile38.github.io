---
id: geofencing
title: Geofencing
sidebar_label: Geofencing
---

<img src="/img/geofence.gif" width="200" height="200" border="0" alt="Geofence animation" align="right" style="margin-left: 10px" class="side-img">
A [geofence](https://en.wikipedia.org/wiki/Geo-fence) is a virtual boundary that can detect when an object enters or exits the area. This boundary can be a radius or any [search area format](../commands/intersects.md#area-formats), such as a [bounding box](../topics/object-types.md#bounding-box), [GeoJSON](../topics/object-types.md#geojson) object, etc. Tile38 can turn any standard search into a geofence monitor by adding the FENCE keyword to the search. 
<br clear="all">

To demonstrate, we'll use a pubsub channel to listen for geofence notifications. Open two terminals:

## Terminal 1

Connect to the Tile38 server and create the geofence using the
[`SETCHAN`](../commands/setchan.md) or [`SETHOOK`](../commands/sethook.md) command.

In this example we use a pubsub channel.

```tile38-cli
$ tile38-cli
localhost:9851> SETCHAN warehouse NEARBY fleet FENCE POINT 33.462 -112.268 6000
{"ok":true,"elapsed":"21.712µs"}
```

Subscribe on the geofence pubsub channel you just created

```tile38-cli
localhost:9851> SUBSCRIBE warehouse
{"ok":true,"command":"subscribe","channel":"warehouse","num":1,"elapsed":"7.361µs"}
```

The connection will be kept open using the SUBSCRIBE command. If any object enters or exits the 6km radius around `33.462,-112.268` the server will respond in realtime with geofence notifications.

## Terminal 2

Connect to the Tile38 server and create a point in the `fleet` collection that will trigger a geofence notification

```tile38-cli
$ tile38-cli
localhost:9851> SET fleet bus POINT 33.460 -112.260
{"ok":true,"elapsed":"12.988µs"}
```

The event will appear in Terminal 1 and look like:

```json
{
  "command": "set",
  "group": "5c5203ccf5ec4e4f349fd038",
  "detect": "inside",
  "hook": "warehouse",
  "key": "fleet",
  "time": "2019-01-30T13:06:36.769273-07:00",
  "id": "bus",
  "object": { "type": "Point", "coordinates": [-112.26, 33.46] }
}
```

### Detect

<a name="detect"></a>
The **`detect`** may be one of the following values.

- **`inside`** is when an object is inside the specified area.
- **`outside`** is when an object is outside the specified area.
- **`enter`** is when an object that **was not** previously in the fence has entered the area.
- **`exit`** is when an object that **was** previously in the fence has exited the area.
- **`cross`** is when an object that **was not** previously in the fence has entered **and** exited the area.

By default **all** detect types and commands are returned.
If you would like to only have a select few then use the `DETECT` option, for example:

```tile38-cli
$ tile38-cli
localhost:9851> SETCHAN warehouse NEARBY fleet FENCE DETECT inside,outside POINT 33.462 -112.268 6000
{"ok":true,"elapsed":"12.988µs"}
```

This command will only tell the fence that you only want **inside** and **outside** detection.

### Command

The server will notify the subscribed clients if the `command` is **`del`** or **`set`** or **`drop`**.

- **`del`** notifies the client that an object has been deleted from the collection that is being fenced.
- **`drop`** notifies the client that the entire collection is dropped.
- **`set`** notifies the client that an object has been added or updated, and when it's position is detected by the fence.

It's also possible to mask which commands are returned by using the `COMMANDS` option, for example:

```tile38-cli
$ tile38-cli
localhost:9851> SETCHAN warehouse NEARBY fleet FENCE DETECT enter COMMANDS set POINT 33.462 -112.268 6000
{"ok":true,"elapsed":"12.988µs"}
```

This specifies that you only want the **enter** detection for the **set** command.

### Where

Similar to searches, geofencing can exclude events based on filters set in `WHERE`, `WHEREIN` and `WHEREEVAL`.

The example of a geofence that only emits an event for objects with a speed of >50 mph is used to demonstrate the behaviour.

```tile38-cli
$ tile38-cli
localhost:9851> SETCHAN warehouse INTERSECTS fleet WHERE speed 50 +inf FENCE DETECT outside,inside POINT 33.462 -112.268 6000
{"ok":true,"elapsed":"12.988µs"}
```

Upon setting an object in the fleet collection with a `speed` `FIELD` that is not matching the `WHERE` filter expression of the geofence, the geofence emits an **outside** event.

```tile38-cli
$ tile38-cli
localhost:9851> SET fleet bus FIELD speed 20 POINT 33.460 -112.260
{"ok":true,"elapsed":"12.988µs"}

{
  "command": "set",
  "group": "5c5203ccf5ec4e4f349fd038",
  "detect": "outside",
  "hook": "warehouse",
  "key": "fleet",
  "time": "2019-01-30T13:06:36.769273-07:00",
  "id": "bus",
  "object": { "type": "Point", "coordinates": [-112.26, 33.46] },
  "fields":{"speed": 20}
}
```

Although the vehicle is **physically inside** the geofence, it **does not match** the `WHERE` expression of the geofence and is therefore considered outside for the scope of this particular geofence.

When setting the object to same physically position, but with a speed matching the `WHERE` expression, the geofence emits an **inside** event.

```tile38-cli
$ tile38-cli
localhost:9851> SET fleet bus FIELD speed 51 POINT 33.460 -112.260
{"ok":true,"elapsed":"12.988µs"}

{
  "command": "set",
  "group": "5c5203ccf5ec4e4f349fd038",
  "detect": "inside",
  "hook": "warehouse",
  "key": "fleet",
  "time": "2019-01-30T13:06:36.769273-07:00",
  "id": "bus",
  "object": { "type": "Point", "coordinates": [-112.26, 33.46] },
  "fields":{"speed": 51}
}
```
