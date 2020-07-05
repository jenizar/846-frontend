# Nuxt SPA Frontend Repository

This repository contains the boilerplate for an extensive Nuxt Frontend SPA. Make sure to use VSCode and stick to the coding standards (otherwise, you won't be able to commmit or even build the whole thing).

⚠️ ***Do not force commits to `master`!*** Committing and pushing on master is disabled by default. Use `feature/*` or `bugfix/*` branches instead. If a feature is finished, its branch can be merged to `develop`, which is merged to `master` only if thoroughly tested and checked. The `master` branch should always contain the currently released version.

↪ Create pull requests to `develop` after a feature or bugfix is completed — add an appropriate reviewer who will merge the PR after reviewing. `master` always contains the latest release which should be used in production and for creating new sites.

### Backend Repository
The backend repository can be found here: https://github.com/949mac/846-backend

## Linting and Code Styling
* EditorConfig support for .editorconifg file
* ESLint to lint JavaScript
* Styelint to lint CSS and SASS

## Build Setup

Currently we are using Node `v12.16.1`. If you aren't doing that already, it might be best to use Node Version Manager (NVM, https://github.com/nvm-sh/nvm). If you are using nvm, simply type `nvm use` in the project root.

``` bash

# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

Check out the [Nuxt.js docs](https://nuxtjs.org) for additional documentation.

## Deploy to SAP Cloud Platform (Cloud Foundry)
create file manifest.yml on the root directory:

---
applications:

- name: police-brutality

  path: .
  
  random-route: true
  
  buildpack: nodejs_buildpack
  
  memory: 512M


add file server.js on the root director:


//server.js

var express = require('express');

var path = require('path');

var serveStatic = require('serve-static');

app = express();

app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;

app.listen(port);

console.log('server started '+ port);


save and then type :

$ npm run build


edit your file package.json on the root director:

//package.json

{

  "name": "846-police-frontend",
  
  "version": "0.0.1",
  
  "description": "8:46 — Police Brutality",
  
  "author": "Manuel Maier",
  
  "private": true,
  
  "scripts": {
  
    "dev": "nuxt --port 3001",
    
    "build": "nuxt build",
    
    "start": "node server.js",   <--- EDIT THIS LINE HERE 
    
...


save and then type :

$ cf api

$ cf login

$ cf push

Reference:

https://medium.com/netscape/deploying-a-vue-js-2-x-app-to-heroku-in-5-steps-tutorial-a69845ace489

## Commit message conventions
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

`feat(test): i am a message`

* feat: A new feature
* fix: A bug fix
* docs: Documentation only changes
* style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* refactor: A code change that neither fixes a bug nor adds a feature
* perf: A code change that improves performance
* test: Adding missing or correcting existing tests
* chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
