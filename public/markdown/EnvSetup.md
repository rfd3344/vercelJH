# **Javascript**

## nvm setup

- Windows:
- https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows#install-nvm-windows-nodejs-and-npm
- node version: https://nodejs.org/en/download

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

# **PCSetup**

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

# **Markdown**

- Code Support Language: https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md

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
Code Sample1
Code Sample2
Code Sample3
Code Sample4
```
````
