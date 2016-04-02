<!--
layout:  index.html
title:   Geofencing - Tile38
class:   topic
-->

Geofencing
---

<img src="/assets/img/geofence.gif" width="200" height="200" border="0" alt="Geofence animation" align="right" style="margin-left: 10px">
A [geofence](https://en.wikipedia.org/wiki/Geo-fence) is a virtual boundary that can detect when an object enters or exits the area. This boundary can be a radius or any [search area format](/commands/intersects#area-formats), such as a [bounding box](/topics/object-types#bounding-box), [GeoJSON](/topics/object-types#geojson) object, etc. Tile38 can turn any standard search into a geofence monitor by adding the FENCE keyword to the search. 
<br clear="all">

A simple example:

```tile38
NEARBY fleet FENCE POINT 33.462 -112.268 6000
```

This command opens a geofence that monitors the `fleet` collection. The server will respond with:

```tile38-json
{ 
    "ok": true,
    "live": true
}
```

And the connection will be kept open. If any object enters or exits the 6 km radius around `33.462,-112.268` the server will respond in realtime with messages such as:

```tile38-json
{
    "command": "set",
    "detect": "enter",
    "hook": "warehouse",
    "time": "2016-03-20T09:37:49.567854293-07:00",
    "key": "fleet",
    "id": "truck02",
    "object": {
        "type": "Point",
        "coordinates": [-112.2695, 33.4626]
    }
}
```

The server will notify the client if the `command` is **`del`** or **`set`** or **`drop`**. 

- **`del`** notifies the client that an object has been deleted from the collection that is being fenced.
- **`drop`** notifies the client that the entire collection is dropped.
- **`set`** notifies the client that an object has been added or updated, and when it's position is detected by the fence.

The **`detect`** may be one of the following values.

- **`inside`** is when an object is inside the specified area.
- **`outside`** is when an object is outside the specified area.
- **`enter`** is when an object that **was not** previously in the fence has entered the area.
- **`exit`** is when an object that **was** previously in the fence has exited the area.
- **`cross`** is when an object that **was not** previously in the fence has entered **and** exited the area.

By default **all** detect types are returned. If you would like to only have a select few then use the `DETECT` option, for example:

```tile38
NEARBY fleet FENCE DETECT inside,outside POINT 33.462 -112.268 6000
```

This command will only tell the fence that you only want **inside** and **outside** detection.



