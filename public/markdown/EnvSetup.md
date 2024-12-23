# **Javascript**

- Tech Stack:
- React, Typescript,
- Vite, NextJS, Electron, ReactNative,
- Redux-Toolkit, RTK Query, Material-UI,
- React-Hook-Form,
- Storybook
- jest, playwright
- AWS Amplify,Cognito, API-GateWay, S3, Lambda-Function, CodePipeline,

- Developed new subscription funnel pages, file upload, including workflow, files management, data storage

- Refactored car search page code, especially the filters adjustment, redux data flow
- Set up the storybook, which is great for style and components check. And also, can be tested easily and effectively

- build code pipeline
- update node version and migrate from Create React App to Vite

## nvm setup

- Windows:
- https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows#install-nvm-windows-nodejs-and-npm

## Global Packages

- list global packages: `npm list -g`

### npm-check-updates

- https://www.npmjs.com/package/npm-check-updates
- upgrades package.json dependencies to the latest versions
- install: `npm install -g npm-check-updates`
- upgrade all packages `ncu -u`

### slow-deps

- check dependencies install time and size
- npm install -g slow-deps
- slow-deps

### serve

- run local server
- npm install --global serve
- serve folder-name/

### windows-build-tools

- npm install --global windows-build-tools

### depcheck

# **PC setup App**

- SourceTree, GithubDesk
- VScode, Sublime,
- Docker
- AnyDesk

### VSCode

- Auto Rename Tag
- Code Spell Checker
- ENV
- ESLint
- Git Blame
- indent-rainbow
- Path Intellisense
- Postman
- Prettier
- SQLite
- SVG Preview

# **Docker**

- Docker: https://github.com/docker/awesome-compose
- Docker Base Image: https://hub.docker.com/search?image_filter=official
- mySampleRepo: https://github.com/rfd3344/dockerJH
-

##### Commands

- check container can access API from command line

```bash
curl http://backend2:3346/api
```

- Compose command

```bash
docker compose up  # Start
docker compose build
docker compose rm # remove containers
```

- cleanup All

```bash
docker stop $(docker ps -aq) # Stop
docker rm $(docker ps -aq) # Remove containers
docker rmi -f $(docker images -q) # Remove images
docker volume rm $(docker volume ls -q) # Remove volumes
```

# **Sample Projects**

- AWS SAM: https://github.com/aws-samples/serverless-samples
- nextjs: https://github.com/vercel/next.js/tree/canary/examples
- ReactNativeSample: https://github.com/ReactNativeNews/React-Native-Apps
- docker Sample: https://github.com/dockersamples
- nextjs Boilerplate: https://github.com/ixartz/Next-js-Boilerplate

# **Markdown Header1**

## Markdown Header2

### Markdown Header3

#### Markdown Header4

> _Markdown Subtitle_

- list1
- list2
- list3
  1. subList1
  2. subList2
  3. subList3

```code
Code Sample1
Code Sample2
Code Sample3
Code Sample4
```

## Markdown Code Sample

````md
# **Header1**

## Header2

### Header3

#### Header4

> _Subtitle_

- list1
- list2
- list3
  1. subList1
  2. subList2
  3. subList3

```code
Code Sample
```
````

```
  ┌────────┴───────┐
  ┫   rectangle    ┣
  └───────┬────────┘


━ ┏ ┛ ┗ ┓ ┃ ┫ ╋ ┣ ︱ ┻ ┳


  ╔═══════╩═════════╗
  ║                 ║ ║
  ╣    BIG RECT     ╠═╬═
  ║                 ║ ║
  ╚═══════╦═════════╝


═ ╔ ╝ ╚ ╗ ║ ╣ ╬ ╠ ─ ╩ ╦


╭ ╮ ╰ ╯

  --------------->
  ^              |
  |              |
  |              v
  <---------------
```
