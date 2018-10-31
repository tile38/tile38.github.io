<!--
layout:  index.html
title:   SETCHAN - Tile38
class:   command
super:   documentation
command: setchan
-->


Creates a Pub/Sub channel which points to a [geofenced](/topics/geofencing) search. If a channel is already associated to that name, it'll be overwritten. Once the channel is created a client can then listen for events on that channel with [SUBSCRIBE](/commands/subscribe) or [PSUBSCRIBE](/commands/psubscribe).

## Examples

Set a simple channel.

```tile38
SETCHAN warehouse NEARBY fleet FENCE POINT 33.5123 -112.2693 500
```

In this example we created a channel named `warehouse` that watches for changes to objects in the `fleet` collection. When a change occurs the channel `warehouse` is notified with a detailed message. The message contains a member named `'detect'` which has one of the following values:

- **`inside`** is when an object is inside the specified area.
- **`outside`** is when an object is outside the specified area.
- **`enter`** is when an object that **was not** previously in the fence has entered the area.
- **`exit`** is when an object that **was** previously in the fence has exited the area.
- **`cross`** is when an object that **was not** previously in the fence has entered **and** exited the area.

*For more information on the format of this message please see the topic on [Geofencing](/topics/geofencing).*

[NEARBY](/commands/nearby), [INTERSECTS](/commands/intersects), and [WITHIN](/commands/within) are supported search types. The `FENCE` keyword must be present.

