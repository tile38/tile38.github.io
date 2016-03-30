<!-- 
layout: index.html
title:  Tile38
class:  home
-->


Tile38 is an open source (MIT licensed), in-memory geolocation data store, spatial index, and realtime geofence. It supports a variety of object types including lat/lon points, bounding boxes, XYZ tiles, Geohashes, and GeoJSON.


## Features

- Spatial index with search methods such as [NEARBY](/commands/nearby), [WITHIN](/commands/within), and [INTERSECTS](/commands/intersects).
- Realtime [geofencing](/topics/geofencing) through persistent sockets or [webhooks](/commands/sethook).
- Object types of [lat/lon](/topics/object-types#latlon-point), [bbox](/topics/object-types#bounding-box), [Geohash](/topics/object-types#geohash), [GeoJSON](/topics/object-types#geojson), [QuadKey](/topics/object-types#quadkey), and [XYZ tile](/topics/object-types#xyz-tile).
- Variety of client protocols, including [http](/topics/clients#http) (curl), [websockets](/topics/clients#websockets), [telnet](/topics/clients#telnet), and a [native interface](/topics/clients#native-interface).
- Server responses are in json.
- Full [command line interface](/topics/command-line-interface).
- Leader / follower [replication](/topics/replication).
- In-memory database that persists on disk.

<br>

<table style="font-size:0.8em;font-style: italic;">
<td align="center"><a href="/topics/geofencing"><img src="/assets/img/geofence.gif" width="80%" alt="Geofence" border="0"></a><br>Geofencing</td>
<td align="center"><a href="/commands/nearby"><img src="/assets/img/search-nearby.png" width="80%" alt="Nearby" border="0"></a><br>Nearby</td>
<td align="center"><a href="/commands/within"><img src="/assets/img/search-within.png" width="80%" alt="Within" border="0"></a><br>Within</td>
<td align="center"><a href="/commands/intersects"><img src="/assets/img/search-intersects.png" width="80%" alt="Intersects" border="0"></a><br>Intersects</td>
</table>

<a name="download"></a>
## Download

[Tile38 {{.LatestVersion}} is the latest release](https://github.com/tidwall/tile38/archive/{{.LatestVersion}}.tar.gz).  
Are you looking for the source repository? [Check the Github page.](https://github.com/tidwall/tile38)

<a name="building"></a>
## Building and Installing
Download, extract and compile Tile38 with:

```tile38-cli
$ curl -L https://github.com/tidwall/tile38/archive/{{.LatestVersion}}.tar.gz > tile38-{{.LatestVersion}}.tar.gz
$ tar xzf tile38-{{.LatestVersion}}.tar.gz
$ cd tile38-{{.LatestVersion}}
$ make
```

The binaries that are now compiled are available in same directory. Run Tile38 with:

```tile38-cli
$ ./tile38-server
```

You can interact with Tile38 using the built-in client:

```tile38-cli
$ ./tile38-cli
tile38> SET fleet truck1 POINT 33.5123 -112.2693
tile38> GET fleet truck1
```