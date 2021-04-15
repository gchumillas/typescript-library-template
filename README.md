A template to create TypeScript libraries.

## Motivation

When creating a library or component, it is common to also create a small project to show it. In addition, that project can also be used to document or test our library.

This template uses [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and is intended to serve as a basis for developing TypeScript libraries. I contains two important folders:

```
/demo --> an usual React application (CRA)
/lib  --> our library
```

## Installation

Download the repository:

```bash
git clone https://github.com/gchumillas/typescript-library-template
```

and replace all occurrences of `@npm-username/library-name` with the name of your library. For example, let's say your NPM username is `anderson` and the desired library name is `my-lib`. Then, the full library name would be `@anderson/my-lib`:

```diff
// demo/src/App.tsx

import React from 'react'
- import { fibonacci } from '@npm-username/library-name'
+ import { fibonacci } from '@anderson/my-lib'
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
+    "@anderson/my-lib": "*",
```

```diff
// lib/package.json

{
-  "name": "@npm-username/library-name",
+  "name": "@anderson/my-lib",
```

and finally install the dependencies:

```bash
cd typescript-library-template
yarn install
```

## Start developing

To start a development server, simply execute the following command from the root directory:

```bash
yarn start
```

If you take a look at the above command (package.json : scripts), you can see that it does two things:

1. Compile your library into the `/lib/src/dist` folder and start a React server.
2. Watch for changes in `/lib/src` and re-compile it.

## Publish your library to NPM

Before publishing your library to NPM check out the following information:

```json
// lib/package.json

{
  "name": "@npm-username/library-name",
  "license": "ISC",
  "version": "0.1.0",
  "description": "Another amazing library",
  "repository": "github:npm-username/library-name",
  "author": "Your Name",
```

Then log into NPM and publish your library

```bash
cd lib
npm login
npm publish --access public
```

Finally install your library from another project and verify that it works:

```bash
yarn add @npm-user/library-name
```
