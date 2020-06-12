---
id: index
title: Commands
sidebar_label: Commands
---

**[AOF](aof.html)** - Downloads the AOF starting from pos and keeps the connection alive

**[AOFMD5](aofmd5.html)** - Performs a checksum on a portion of the aof

**[AOFSHRINK](aofshrink.html)** - Shrinks the aof in the background

**[AUTH](auth.html)** - Authenticate to the server

**[BOUNDS](bounds.html)** - Get the combined bounds of all the objects in a key

**[CHANS](chans.html)** - Finds all channels matching a pattern

**[CONFIG GET](config-get.html)** - Get the value of a configuration parameter

**[CONFIG REWRITE](config-rewrite.html)** - Rewrite the configuration file with the in memory configuration

**[CONFIG SET](config-set.html)** - Set a configuration parameter to the given value

**[DEL](del.html)** - Delete an id from a key

**[DELCHAN](delchan.html)** - Removes a channel

**[DELHOOK](delhook.html)** - Removes a webhook

**[DROP](drop.html)** - Remove a key from the database

**[EVAL](eval.html)** - Evaluates a Lua script

**[EVALNA](evalna.html)** - Evaluates a Lua script in a non-atomic fashion

**[EVALNASHA](evalnasha.html)** - Evaluates, in a non-atomic fashion, a Lua script cached on the server by its SHA1 digest

**[EVALRO](evalro.html)** - Evaluates a read-only Lua script

**[EVALROSHA](evalrosha.html)** - Evaluates a read-only Lua script cached on the server by its SHA1 digest

**[EVALSHA](evalsha.html)** - Evaluates a Lua script cached on the server by its SHA1 digest

**[EXPIRE](expire.html)** - Set a timeout on an id

**[FLUSHDB](flushdb.html)** - Removes all keys

**[FOLLOW](follow.html)** - Follows a leader host

**[FSET](fset.html)** - Set the value for one or more fields of an id

**[GC](gc.html)** - Forces a garbage collection

**[GET](get.html)** - Get the object of an id

**[HOOKS](hooks.html)** - Finds all hooks matching a pattern

**[INTERSECTS](intersects.html)** - Searches for ids that intersect an area

**[JDEL](jdel.html)** - Delete a value from a JSON document

**[JGET](jget.html)** - Get a value from a JSON document

**[JSET](jset.html)** - Set a value in a JSON document

**[KEYS](keys.html)** - Finds all keys matching the given pattern

**[NEARBY](nearby.html)** - Searches for ids that are nearby a point

**[OUTPUT](output.html)** - Gets or sets the output format for the current connection.

**[PDEL](pdel.html)** - Removes all objects matching a pattern

**[PDELCHAN](pdelchan.html)** - Removes all channels matching a pattern

**[PDELHOOK](pdelhook.html)** - Removes all hooks matching a pattern

**[PERSIST](persist.html)** - Remove the existing timeout on an id

**[PING](ping.html)** - Ping the server

**[PSUBSCRIBE](psubscribe.html)** - Subscribes the client to the given patterns

**[QUIT](quit.html)** - Close the connection

**[READONLY](readonly.html)** - Turns on or off readonly mode

**[RENAME](rename.html)** - Rename a key to be stored under a different name.

**[RENAMENX](renamenx.html)** - Rename a key to be stored under a different name, if a new key does not exist.

**[SCAN](scan.html)** - Incrementally iterate though a key

**[SCRIPT EXISTS](script-exists.html)** - Returns information about the existence of the scripts in server cache

**[SCRIPT FLUSH](script-flush.html)** - Flushes the server cache of Lua scripts

**[SCRIPT LOAD](script-load.html)** - Loads the compiled version of a script into the server cache, without executing

**[SEARCH](search.html)** - Search for string values in a key

**[SERVER](server.html)** - Show server stats and details

**[SET](set.html)** - Sets the value of an id

**[SETCHAN](setchan.html)** - Creates a pubsub channel which points to geofenced search

**[SETHOOK](sethook.html)** - Creates a webhook which points to geofenced search

**[STATS](stats.html)** - Show stats for one or more keys

**[SUBSCRIBE](subscribe.html)** - Subscribe to a geofence channel

**[TEST](test.html)** - Performs spatial test

**[TIMEOUT](timeout.html)** - Runs the following command with the timeout

**[TTL](ttl.html)** - Get a timeout on an id

**[WITHIN](within.html)** - Searches for ids that completely within the area

