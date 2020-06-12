<!--
layout:  index.html
title:   JGET - Tile38
class:   command
super:   documentation
command: jget
-->

Get a value from a JSON document.

JGET, JSET, and JDEL allow for working with JSON strings, for example:

```tile38
JSET user 901 name Tom
JGET user 901
> {"name":"Tom"}

JSET user 901 name.first Tom
JSET user 901 name.last Anderson
JGET user 901
> {"name":{"first":"Tom","last":"Anderson"}}

JDEL user 901 name.last
JGET user 901
> {"name":{"first":"Tom"}}
```

All commands use the GJSON path syntax, for more information:

Setting JSON: https://github.com/tidwall/sjson  
Getting JSON: https://github.com/tidwall/gjson

