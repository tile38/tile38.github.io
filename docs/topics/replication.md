---
id: replication
title: Replication
sidebar_label: Replication
---

Tile38 replication is a leader-follower model and is intended to be very easy to set up.

## Quick Tutorial

Run the commands below using the [Command Line Interface](../topics/command-line-interface.md). On your local machine you will begin two different Tile38 server instances. The second server will follow the first server.

Open a new terminal and run:

```plaintext
$ ./tile38-server -p 9851 -d data1
```

This will start a new Tile38 server and persist all data to the `data1` directory.

Open a second terminal and run:

```plaintext
$ ./tile38-server -p 9852 -d data2
```

This will start a second Tile38 server and persist all data to the `data2` directory.

Send the second server the command:

```tile38-cli
FOLLOW localhost 9851            # execute on the port 9852 server
```

This will instruct the second server to follow the first server.

Then create an object on the first server:

```tile38-cli
SET key1 obj1 POINT 33.1 -112.4  # execute on the port 9851 server
```

This will create the object on the first server and replicate the object to the second server.

Finally, test if the object has been create on the second server.

```tile38-cli
GET key1 obj1                    # execute on the port 9852 server
```

The object will be returned.

## Additional information

A follower will never accept write commands. Write commands are those that create, update, delete or rename objects and collections.
For a follower to accept read commands, so commands that request data from the server like e.g. `SCAN`, `WITHIN`, the follower
must have **caught up** to its leader.
If not caught up, the follower will reject the commands with `[Error]: not caught up`.

You can check that status using [HEALTHZ](../commands/healthz.md).

Commands like `HEALTHZ`, `INFO`, `SERVER` and `OUTPUT` are always accepted by a follower, no matter if caught up, or not.
