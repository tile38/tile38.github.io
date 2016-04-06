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
- Support for lots of [Clients Libraries](/clients) written in many different langauges.
- Variety of client protocols, including [http](/topics/network-protocols#http) (curl), [websockets](/topics/network-protocols#websockets), [telnet](/topics/network-protocols#telnet), and the [Redis RESP](http://redis.io/topics/protocol).
- Server responses are [RESP](http://redis.io/topics/protocol) or [JSON](http://www.json.org).
- Full [command line interface](/topics/command-line-interface).
- Leader / follower [replication](/topics/replication).
- In-memory database that persists on disk.


<div style="text-align: center"><a href="/try">Try Tile38 Online</a></div>


<br>

<table style="font-size:0.8em;font-style: italic;">
<td align="center"><a href="/topics/geofencing"><img src="/assets/img/geofence.gif" width="80%" alt="Geofence" border="0"></a><br>Geofencing</td>
<td align="center"><a href="/commands/nearby"><img src="/assets/img/search-nearby.png" width="80%" alt="Nearby" border="0"></a><br>Nearby</td>
<td align="center"><a href="/commands/within"><img src="/assets/img/search-within.png" width="80%" alt="Within" border="0"></a><br>Within</td>
<td align="center"><a href="/commands/intersects"><img src="/assets/img/search-intersects.png" width="80%" alt="Intersects" border="0"></a><br>Intersects</td>
</table>

<a name="getting-started"></a>
## Getting Started

The easiest way to get Tile38 is to use one of the pre-built release binaries which are available for OSX, Linux, and Windows. Instructions for using these binaries are on the GitHub [releases page](https://github.com/tidwall/tile38/releases).

If you want to try the latest version, you can build Tile38 from the [master branch](https://github.com/tidwall/tile38).

### OS X

To get started on OSX run the following in a terminal:

```tile38-cli
curl -L  https://github.com/tidwall/tile38/releases/download/{{.LatestVersion}}/tile38-{{.LatestVersion}}-darwin-amd64.zip -o tile38-{{.LatestVersion}}-darwin-amd64.zip
unzip tile38-{{.LatestVersion}}-darwin-amd64.zip
cd tile38-{{.LatestVersion}}-darwin-amd64
./tile38-server
```

Open another terminal:

```tile38-cli
./tile38-cli set fleet truck point 33.5 -115.5
./tile38-cli get fleet truck
```

### Linux

To get started on Linux run the following in a terminal:

```tile38-cli
curl -L  https://github.com/tidwall/tile38/releases/download/{{.LatestVersion}}/tile38-{{.LatestVersion}}-linux-amd64.tar.gz -o tile38-{{.LatestVersion}}-linux-amd64.tar.gz
tar xzvf tile38-{{.LatestVersion}}-linux-amd64.tar.gz
cd tile38-{{.LatestVersion}}-linux-amd64
./tile38-server
```

Open another terminal:

```tile38-cli
./tile38-cli set fleet truck point 33.5 -115.5
./tile38-cli get fleet truck
```

<a name="building"></a>
## Building Tile38
Download, extract and compile Tile38 with:

```tile38-cli
curl -L https://github.com/tidwall/tile38/archive/{{.LatestVersion}}.tar.gz > tile38-{{.LatestVersion}}.tar.gz
tar xzf tile38-{{.LatestVersion}}.tar.gz
cd tile38-{{.LatestVersion}}
make
```

The binaries that are now compiled are available in same directory. Run Tile38 with:

```tile38-cli
./tile38-server
```

You can interact with Tile38 using the built-in client:

```tile38-cli
./tile38-cli
tile38> SET fleet truck1 POINT 33.5123 -112.2693
tile38> GET fleet truck1
```