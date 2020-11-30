---
id: setchan
title: SETCHAN
sidebar_label: __no_label
---

## Syntax

**SETCHAN name [META name value ...] [EX seconds] NEARBY|WITHIN|INTERSECTS key FENCE [DETECT what] [COMMANDS which] param [param...]**

## Description

Creates a Pub/Sub channel which points to a [geofenced](../topics/geofencing.md) search. If a channel is already associated to that name, it'll be overwritten. Once the channel is created a client can then listen for events on that channel with [SUBSCRIBE](../commands/subscribe.md) or [PSUBSCRIBE](../commands/psubscribe.md).

## Examples

Set a simple channel.

```tile38-cli
SETCHAN warehouse NEARBY fleet FENCE POINT 33.5123 -112.2693 500
```

In this example we created a channel named `warehouse` that watches for changes to objects in the `fleet` collection. When a change occurs the channel `warehouse` is notified with a detailed message. The message contains a member named `'detect'` which has one of the following values:

- **`inside`** is when an object is inside the specified area.
- **`outside`** is when an object is outside the specified area.
- **`enter`** is when an object that **was not** previously in the fence has entered the area.
- **`exit`** is when an object that **was** previously in the fence has exited the area.
- **`cross`** is when an object that **was not** previously in the fence has entered **and** exited the area.

*For more information on the format of this message please see the topic on [Geofencing](../topics/geofencing.md).*

[NEARBY](../commands/nearby.md), [INTERSECTS](../commands/intersects.md), and [WITHIN](../commands/within.md) are supported search types. The `FENCE` keyword must be present.

## Related Commands

[CHANS](../commands/chans.md)<br>
[DELCHAN](../commands/delchan.md)<br>
[PDELCHAN](../commands/pdelchan.md)<br>
[PSUBSCRIBE](../commands/psubscribe.md)<br>
**[SETCHAN](../commands/setchan.md)**<br>
[SUBSCRIBE](../commands/subscribe.md)<br>