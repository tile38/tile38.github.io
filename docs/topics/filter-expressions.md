---
id: filter-expressions
title: Filter Expressions
sidebar_label: Filter Expressions
---


Starting with v1.30, a `FIELD` can store more than just a number, and the `WHERE` clause supports [expressions](#expressions) that filter on an object fields or [GeoJSON properties](#geojson-properties).

### Field Types

Fields can be a variety of types such as strings, numbers, booleans, and JSON.

```tile38-cli
SET fleet truck1  FIELD name Andy  POINT 33 -112
SET fleet truck2  FIELD speed 90  POINT 33 -112
SET fleet truck3  FIELD inactive true  POINT 33 -112
SET fleet truck4  FIELD info '{"speed":60,"age":21,"name":"Tom"}'  POINT 33 -112
```

### Expressions

The WHERE clause can use an expressions to filter on object fields.
The syntax is very similar to Javascript expressions. 

```tile38-cli
INTERSECTS fleet WHERE 'name == "Andy"' BOUNDS 30 -120 40 -100
INTERSECTS fleet WHERE 'info.speed > 45 && info.age < 21' BOUNDS 30 -120 40 -100
```

### Matching string fields

It's often useful to filter on a substring of a field's value.
For example to filter on objects in the `fleet` collection that have a field
named `class` with a string value starting with `driver:`.

```tile38-cli
INTERSECTS fleet WHERE 'class.match("driver:*")' BOUNDS 30 -120 40 -100
```

### GeoJSON Properties

Expressions can be used to filter on the "properties" member of a GeoJSON Feature.

For example, let's say we want to store the following geojson feature:

```json
{
  "type": "Feature",
  "geometry": { "type": "Point", "coordinates": [-112, 33] },
  "properties": {
    "speed": 55,
    "age": 23,
    "name": "Carol",
  }
}
```

```tile38-cli
SET fleet truck5 OBJECT '{"type":"Feature","geometry":{"type":"Point","coordinates":[-112,33]},"properties":{"speed":55,"age":23,"name":"Carol"}}'
```

The "properties" member can be queried using like such:

```tile38-cli
INTERSECTS fleet WHERE 'properties.name == "Carol"' BOUNDS 30 -120 40 -100
```


----

For additional techical info on the expression syntax:

- [https://github.com/tidwall/expr](https://github.com/tidwall/expr)
- [MDN Javascript Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

