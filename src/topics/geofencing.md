<!--
layout:  index.html
title:   Geofencing - Tile38
class:   topic
-->

Geofencing
---

<img src="/assets/img/geofence.gif" width="200" height="200" border="0" alt="Geofence animation" align="right" style="margin-left: 10px">
A [geofence](https://en.wikipedia.org/wiki/Geo-fence) is a virtual boundary that can detect when an object enters or exits the area. This boundary of this area can be a radius or any [search area format](/commands/intersects#area-formats), such as a [bounding box](/topics/object-types#bounding-box), [GeoJSON](/topics/object-types#geojson) object, etc. Tile38 can turn any standard search into a geofence monitor by adding the FENCE keyword to the search. 
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

The **`detect`** may be **`enter`** or **`exit`** or **`cross`**.

- **`enter`** is when an object that **was not** previously in the fence has entered the area.
- **`exit`** is when an object that **was** previously in the fence has exited the area.
- **`cross`** is when an object that **was not** previously in the fence has entered and exited the area.
