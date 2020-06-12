<!--
layout:  index.html
title:   SEARCH - Tile38
class:   command
super:   documentation
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

Please note that this command only STRING values. 
Geo values such and POINT and OBJECT require use the SCAN command.
