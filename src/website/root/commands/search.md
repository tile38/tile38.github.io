<!--
layout:  index.html
title:   SEARCH - Tile38
class:   command
command: search
-->

SEARCH iterates though a key's string values.

This command has many options, but at it’s most simplest it may appear like.

```tile38
SEARCH names
```

Above is a scan for all strings in the `names` key. 

It's also possible to filter the values using the MATCH keyword and to order the results using ASC and DESC.
For Example:

```tile38
SEARCH names MATCH J* DESC
```

The above command will search for all values that begin with `J` from the `names` key and return the results in descending order.

## Search Options

For a complete list of search options please see the [INTERSECTS](/commands/intersects#search-options) command.

*Please note that the [SCAN](/commands/scan) command does not allow `FENCE` and `SPARSE`.*

## Output Formats

For a complete list of output formats please see the [INTERSECTS](/commands/intersects#output-formats) command.
