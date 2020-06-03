# Nuxt SPA Frontend Repository

This repository contains the boilerplate for an extensive Nuxt Frontend SPA. Make sure to use VSCode and stick to the coding standards (otherwise, you won't be able to commmit or even build the whole thing).

⚠️ ***Do not force commits to `master`!*** Committing and pushing on master is disabled by default. Use `feature/*` or `bugfix/*` branches instead. If a feature is finished, its branch can be merged to `develop`, which is merged to `master` only if thoroughly tested and checked. The `master` branch should always contain the currently released version.

↪ Create pull requests to `develop` after a feature or bugfix is completed — add an appropriate reviewer who will merge the PR after reviewing. `master` always contains the latest release which should be used in production and for creating new sites.

## Linting and Code Styling
* EditorConfig support for .editorconifg file
* ESLint to lint JavaScript
* Styelint to lint CSS and SASS

## Build Setup

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
