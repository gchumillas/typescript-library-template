A template to create TypeScript libraries.

## Motivation

When creating a library or component, it is common to also create a small project to show it. In addition, that project can also be used to document or test our library.

This template is intended to serve as a basis for developing TypeScript libraries and contains two important folders:

```
/demo --> an usual React application (CRA)
/lib  --> our library
```

## Install

Download the repository:
```bash
git clone https://github.com/gchumillas/typescript-library-template
```

and replace all occurrences of `@npm-username/library-name` with the name of your library. For example, let's say your NPM username is `anderson`:

```diff
// demo/src/App.tsx

import React from 'react'
- import { fibonacci } from '@npm-username/library-name'
+ import { fibonacci } from '@anderson/my-awesome-lib'
import './App.css'
```

```diff
// demo/package.json

{
  "name": "demo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
-    "@npm-username/library-name": "*",
+    "@anderson/my-awesome-lib": "*",
```

```diff
// lib/package.json

{
-  "name": "@npm-username/library-name",
+  "name": "@anderson/my-awesome-lib",
```

## Publish to NPM
