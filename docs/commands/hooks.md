---
id: hooks
title: HOOKS
sidebar_label: __no_label
---

## Syntax

**HOOKS pattern**

## Description

Returns all hooks matching `pattern`.

Supported [glob-style patterns](https://en.wikipedia.org/wiki/Glob_(programming)):

- h?llo matches hello, hallo and hxllo
- h*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo

## Examples

```tile38-cli
HOOKS *             # return all hooks
HOOKS warehouse:*   # return all hooks that have the prefix with 'warehouse:'
```

## Related Commands

[DELHOOK](../commands/delhook.md)<br>
**[HOOKS](../commands/hooks.md)**<br>
[PDELHOOK](../commands/pdelhook.md)<br>
[SETHOOK](../commands/sethook.md)<br>