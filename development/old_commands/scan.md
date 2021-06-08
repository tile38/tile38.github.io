<!--
layout:  index.html
title:   SCAN - Tile38
class:   command
super:   documentation
command: scan
-->

SCAN incrementally iterates though a key.

This command has many options, but at it’s most simplest it may appear like.

```tile38
SCAN fleet
```

Above is a scan for all object in the `fleet` key.

## Search Options

For a complete list of search options please see the [INTERSECTS](/commands/intersects#search-options) command.

*Please note that the [SCAN](/commands/scan) command does not allow `FENCE` and `SPARSE`.*

## Output Formats

For a complete list of output formats please see the [INTERSECTS](/commands/intersects#output-formats) command.
