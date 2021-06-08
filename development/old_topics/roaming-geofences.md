<!--
layout:  index.html
title:   Roaming Geofences - Tile38
class:   topic
super:   documentation
-->

<img src="/img/roaming.gif" width="225" height="225" border="0" alt="Roaming Geofence animation" align="right" style="margin-left: 10px" class="side-img">

Tile38 1.2 introduces a powerful new feature which allows for dynamic [geofences](/topics/geofencing). This enables realtime monitoring for when one or more moving objects are nearby each other.

A couple of common use cases are:

- **Vehicle pickup services**: Instantly be notified when a vehicle is nearby somebody waiting to be picked up, or when a person approaches a vehicle, or when a vehicle is nearby other vehicles in the fleet.

- **Proximity social apps**: Very useful for when you need to check if two users are nearby each other without having to constantly query the database.

<br clear="all">

A simple example:

```tile38-cli
NEARBY people FENCE ROAM people * 5000
```

This will open a roaming fence on the `people` collection. The fence watches for when any object is within 5000 meters of any other object in the same collection.

To test, open two terminals:

## Terminal 1

Connect to the Tile38 server and enter the fence command.

```tile38-cli
$ tile38-cli
localhost:9851> NEARBY people FENCE ROAM people * 5000
+OK
```

## Terminal 2

Add two points to the `people` collection. The second SET command will trigger a fence event that will appear in the other terminal.

```tile38-cli
$ tile38-cli
localhost:9851> SET people bob POINT 33.01 -115.01
localhost:9851> SET people alice POINT 33.02 -115.02
```

The event will appear in terminal 1 and look like:

```json
{
  "command": "set",
  "detect": "roam",
  "hook": "",
  "key": "people",
  "id": "alice",
  "time": "2016-05-24T09:19:44.08649461-07:00",
  "object": { "type": "Point", "coordinates": [-115.02, 33.02] },
  "nearby": {
    "key": "people",
    "id": "bob",
    "meters": 1451.138152186708
  }
}
```

Which shows that `alice` was updated and that `bob` is 1,451 meters away.

Some other examples:

```tile38-cli
# Watch `alice` and `bob` for when they are within 100 meters of each other.
NEARBY people MATCH alice FENCE ROAM people bob 100
# Watch objects beginning in 'a' for when they within 100 meters of any object in the friends collection.
NEARBY people MATCH a* FENCE ROAM friends * 100
```

And if you are using [webhooks](/commands/sethook) you can assign this fence like such:

```tile38-cli
SETHOOK myhook http://10.0.1.5/hook NEARBY people FENCE ROAM people * 5000
```

## NODWELL Keyword

One side effect is that you may get a lot of nearby notifications when two
objects continue to be nearby each other. If this is a problem then use the
`NODWELL` keyword.

```tile38-cli
tile38-cli> NEARBY people FENCE NODWELL ROAM people * 5000
```

This will ensure that there is repeating nearby or faraway notifications for two
connecting objects.
