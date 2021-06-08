<!--
layout:  index.html
title:   FSET - Tile38
class:   command
super:   documentation
command: fset
-->

Set the value for one or more fields of an id.
Fields are double precision floating points.

Return value is the integer count of how many fields actually changed their values.

## Examples

Set a field named `speed` to `16` and a field named `wheels` to 8 for `truck1`.

```tile38
FSET fleet truck1 speed 16 wheels 8
```

## Options

Normally, `FSET` will return an error if the field is being set on a non-existent id.  However, the option `XX` can alter this behavior.  Specifically, if called with `XX` option, `FSET` will return `0` when called on a non-existend id.

Note that the non-existent key will still cause an error!
