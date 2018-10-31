<!--
layout:  index.html
title:   Command Line Interface - Tile38
class:   topic
super:   documentation
-->

# Command Line Interface

When you [build](/#building) the `tile38-server` executable binary, an accompanied `tile38-cli` executable binary will also be built.

## Basic Operations

Connect to the default Tile38 server running on port `9851`.

```tile38-cli
$ ./tile38-cli

# add a couple of points named 'truck1' and 'truck2' to a collection named 'fleet'.
> SET fleet truck1 POINT 33.5123 -112.2693   # on the Loop 101 in Phoenix
> SET fleet truck2 POINT 33.4626 -112.1695   # on the I-10 in Phoenix

# search the 'fleet' collection.
> SCAN fleet                                 # returns both trucks in 'fleet'
> NEARBY fleet POINT 33.462 -112.268 6000    # search 6 kilometers around a point. returns one truck.

# crud operations
> GET fleet truck1                           # returns 'truck1'
> DEL fleet truck2                           # deletes 'truck2'
> DROP fleet                                 # removes all 
```

All of the standard [commands](/commands) are supported. For inline help use the `help` command:

```tile38-cli
$ ./tile38-cli

> help

tile38-cli 1.0.4
Type: "help @<group>" to get a list of commands in <group>
      "help <command>" for help on <command>
      "help <tab>" to get a list of possible help topics
      "quit" to exit
```

## Arguments

```tile38-cli
$ ./tile38-cli -h

tile38-cli 1.0.4

Usage: tile38-cli [OPTIONS] [cmd [arg [arg ...]]]
 -h <hostname>      Server hostname (default: 127.0.0.1).
 -p <port>          Server port (default: 9851).
```

