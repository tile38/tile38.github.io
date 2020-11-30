---
id: eval
title: EVAL
sidebar_label: __no_label
---

## Syntax

**EVAL script numkeys [key ...] [arg ...]**

## Description

Commands from the EVAL family evaluate Lua scripts using the Lua 5.1 interpreter running within the Tile38 server.

The `script` is a text of a Lua 5.1 script.  The content of the script will be used to create a Lua function on the server.  That function will take no arguments and should return one Lua value.  Note: the script should not start with the `function` keyword.

The `numkeys` is the number of tile38 keys that will be passed into EVAL.

Following that, the next `numkeys` arguments are the tile38 keys that can be accessed by the script.  The remaining tokens are the additional arguments that can be accessed by the script but do not represent the tile38 keys.

The keys and additional arguments are available from the script as global variables KEYS and ARGV, both are one-based arrays (Lua tables).  Specifically, they keys will be available in the script as KEYS[1], KEYS[2], ..., and the additional arguments will be available as ARGV[1], ARGV[2], ...

```tile38-cli
EVAL 'return {"Got keys", KEYS[1], KEYS[2], "Got args", ARGV[1]}' 2 fleet fleet2 drivers
1) "Got keys"
2) "fleet"
3) "fleet2"
4) "Got args"
5) "drivers"
```

The Lua environment inside the Tile38 server defines two functions to call other tile38 commands from a Lua script:

* `tile38.call()`
* `tile38.pcall()`

The only difference between these two functions is how they handle the errors that might happen when the tile38 command is called.  The `tile38.call()` will raise a Lua error, while `tile38.pcall()` will return a Lua table containing the error message.

The arguments of `tile38.call()` and `tile38.pcall()` are the same tokens one would send as a tile38 command:
```tile38-cli
EVAL 'return tile38.call("GET", "fleet", "truck1", "POINT")' 0
1) "33"
2) "-115"
```

Note that the above call includes the key name into the script and sends 0 keys.  This should be avoided in favor of the following form:
```tile38-cli
EVAL 'return tile38.call("GET", KEYS[1], ARGV[1], "POINT")' 1 mykey myid1
1) "33"
2) "-115"
```

This is useful in many ways. One reason is the potential future features involving clustering/sharding of the data.  Another immediate reason is that it is beneficial to have constant scripts into which different keys/args are sent.  This allows caching the compiled script on the server and avoid compiling new Lua code each time the script is evaluated (see [EVALSHA](../commands/evalsha.md) and [SCRIPT LOAD](../commands/script-load.md) for more details.)

The value returned by a Lua script will be converted from its Lua type to one of the types supported by RESP.

## Type Conversions

When a Lua script calls a tile38 command through `tile38.call()` or `tile38.pcall()`, the result of the call (a RESP value) is converted to Lua type. Similarly, when the script returns a value to the EVAL command, it is converted from a Lua type to RESP. The type conversion rules are as follows:

### RESP to Lua conversion table
* RESP integer -> Lua number
* RESP bulk string -> Lua string
* RESP array -> Lua table (array)
* RESP simple string -> Lua table (key-value map) with a single `ok` key and the status message as the value
* RESP error -> Lua table (map) with a single `err` key and the error message as the value
* RESP Nil -> Lua boolean false

### Lua to RESP conversion table
* Lua number -> RESP integer (if you need to return a float, return it as a string!)
* Lua string -> RESP bulk string
* Lua table (array) -> RESP array
* Lua table (key-value map) -> RESP array of (key, value) pairs, each pair being a RESP array of two items
* Lua table (key-value map) with a single `ok` key -> RESP simple string
* Lua table (key-value map) with a single `err` key -> RESP error
* Lua boolean false -> RESP Nil

With these conversion rules, any RESP value that is converted to Lua and then back to RESP will be identical to the original.

There's a couple of additional one-way Lua-RESP conversions:

* Lua boolean true -> RESP integer 1
* Lua nil -> RESP Nil

## Helper functions
The Lua environment inside the Tile38 server also defines these helper functions:

* `tile38.error_reply(error_string)` returns an error reply, as if obtained by the failed `tile38.pcall()`.
* `tile38.status_reply(status_string)` returns a status reply, as if obtained by the successful `tile38.call()` or `tile38.pcall()` that returns a status reply.
* `tile38.sha1hex(input_string)` returns a hex representation of a SHA1 digest.
* `tile38.distance_to(lat_a, lon_a, lat_b, lon_b)` returns a distance between points `a` and `b`, in meters.

## Helper vairables

* A global variable `DEADLINE` is set inside the Lua environment. Its value is either `nil` (no timeout)
or a Unix epoch second of the deadline after which the script will be killed, if invoked with the [TIMEOUT](../commands/timeout.md).

## Atomicity of scripts
Tile38 provides three different levels of atomicity:

* **Full**, used by [EVAL](../commands/eval.md) and [EVALSHA](../commands/evalsha.md):
No other command is running on the server during the execution ofthe script;
* **Read-only**, used by [EVALRO](../commands/evalro.md) and [EVALROSHA](../commands/evalrosha.md): No write-capable command is running on the server during the execution of the script.  Other read-only commands or read-only scripts might run concurrently.
* **None**, used by [EVALNA](../commands/evalna.md) and [EVALNASHA](../commands/evalnasha.md): It is possible that any command will run concurrently with the script. The usual Tile38 atomicity rules will be applied to each tile38 command, as the script calls it through `tile38.call()` or `tile38.pcall()`.

The reason for providing different atomicity levels is that in that the users might want to pick a particular behavior depending on their use case. Examples:

1. You want to avoid race conditions: check some values and depending on the result maybe set or delete some values, or read some other values.  In that case, you absolutely don't want any data changes to happen between the parts of your script.  Use **Full** atomicity: call your script through [EVAL](../commands/eval.md) or [EVALSHA](../commands/evalsha.md).
2. You want to avoid race conditions, but you know your script does not make any writes itself.  In that case, you may use either **Full** or **Read-only** atomicity.  If you choose **Read-only** your script might execute faster, as it will not have to wait for all existing readers to finish first.  A **Read-only** script will also let other read-only commands or read-only scripts to run faster, as they will not have to wait for you to finish first. In other words, if your script is guaranteed to be read-only, you loose nothing and potentially gain by using **Read-only** level.  Call your script using [EVALRO](../commands/evalro.md) or [EVALROSHA](../commands/evalrosha.md).
3. You are running long script such as a search with the cursor, then examining the returned values and picking the ones you like, and then getting more values from the cursor, and so on.  The reason you use a script as opposed to multiple calls from the client is that you don't want to waste time on the round trips.  At the same time, you're not concerned about race conditions.  In that case, use the **None** atomicity. In other words, call your script through [EVALNA](../commands/evalna.md) or [EVALNASHA](../commands/evalnasha.md).

## Caching and -SHA commands
Tile38 has an internal caching mechanism that will avoid recompiling a script on every evaluation, so even if you send the same script multiple times it will only be compiled once.

However, you can run scripts even more efficiently (taking less bandwidth) by using -SHA version of the commands: [EVALSHA](../commands/evalsha.md), [EVALROSHA](../commands/evalrosha.md), and [EVALNASHA](../commands/evalnasha.md).  For each script you want to run:

1. Load that script by [SCRIPT LOAD](../commands/script-load.md) command, which returns the SHA1 digest of your script.
```tile38-cli
SCRIPT LOAD "return tile38.pcall('set', KEYS[1], ARGV[1], 'point', ARGV[2], ARGV[2])"
"d8bc159162250f39654a6466a92a66215814877b"
```
2. Use a -SHA command exactly as you would have used a non-SHA command, the only difference being that you send a SHA1 digest string as your first argument.
```tile38-cli
EVALSHA d8bc159162250f39654a6466a92a66215814877b 1 mykey myid2 33.1 -115.1
OK
```

The script caching is not persistent, meaning it will be lost when the tile38 server is restarted.

Commands relevant to script caching are:

* [SCRIPT FLUSH](../commands/script-flush.md)
* [SCRIPT EXISTS](../commands/script-exists.md)
* [SCRIPT LOAD](../commands/script-load.md)

## Replication
The changes to the tile38 data made by scripts are replicated on the command level.  In other words, when the script runs multiple commands, each command's changes will be shipped to the replicas and replayed there.

## Global variables protection
The scripts are not allowed to create global variables, as this would leak memory in the re-used Lua state.  An attempt to create a global variable will result in error:
```tile38-cli
EVAL 'a=10' 0
(error) ERR f_933044db579a2f8fd45d8065f04a8d0249383e57:1: attempt to create global variable 'a'
stack traceback:
    [G]: in function (anonymous)
    f_933044db579a2f8fd45d8065f04a8d0249383e57:1: in main chunk
    [G]: ?
```
Note: this measure can only prevent the accidental modifications of the global namespace.  If the malicious user really wants to modify or delete existing global variables, there's no protection we could put in place that the user could not undo.  Therefore there's no more protection for existing globals. Do not mess them up!

Any variables that the script needs to set up should be prepended with the `local` keyword:
```tile38-cli
EVAL 'local a=10; return a * 3' 0
(integer) 30
```

## Available libraries

The following libraries are loaded in the Lua interpreter inside the Tile38 server:

* `base`
* `table`
* `io`
* `os`
* `string`
* `math`
* `debug`
* `json`

Every Tile38 instance is guaranteed to have all these libraries so you can be sure that the environment for your scripts is always the same.

`json` is an external library, all the other libraries are standard Lua libraries, see **Miscellaneous notes** below.

### JSON

The JSON library exposes `decode` and `encode` functions. Examples:

```tile38-cli
> EVAL 'return json.encode({["foo"]= "bar"})' 0
"{\"foo\":\"bar\"}"
    
> EVAL 'return json.decode(ARGV[1])["foo"]' 0 "{\"foo\":\"bar\"}"
"bar"
```

### Unsupported functions

The following functions from standard Lua libraries are not available:

* `string.dump`
* `os.setlocale`
* `lua_Debug.namewhat`
* `package.loadlib`
* debug hooks

### Miscellaneous notes

* `collectgarbage` does not take any arguments and runs the garbage collector for the entire Tile38 server.
* `file:setvbuf` does not support a line buffering.
* Daylight saving time is not supported.
* `os.setenv(name, value)` is a function that sets an environment variable.

## Related Commands

**[EVAL](../commands/eval.md)**<br>
[EVALNA](../commands/evalna.md)<br>
[EVALNASHA](../commands/evalnasha.md)<br>
[EVALRO](../commands/evalro.md)<br>
[EVALROSHA](../commands/evalrosha.md)<br>
[EVALSHA](../commands/evalsha.md)<br>
[SCRIPT EXISTS](../commands/script-exists.md)<br>
[SCRIPT FLUSH](../commands/script-flush.md)<br>
[SCRIPT LOAD](../commands/script-load.md)<br>