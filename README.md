# Challenge

## Setup

### General

This application was created using `create-react-app`. Instructions to run this application is the same as in all `create-react-app` applications.

Before running local development check that your `npm` is up to date. Use [documentation](https://www.npmjs.com/get-npm) for installation and upgrade guide.

### Local

For local run you should execute commands:

```shell
npm i
npm start
```

### Local production

To serve application locally you should exacute commands using `serve`:

```shell
npm i -g serve
npm run build --production
serve -s build
```

### Docker

For fun I've added `docker` with `docker-compose` with development container build. It's unoptimized. Make sure that `docker` is install on your machine, before running, use [installation guide](https://docs.docker.com/install/).

```shell
docker-compose build
docker-compose up
```

## Description

### Help

- `fake.api.js` contains api data, in case you would want to add more `phones`.

### Notes

- For some reason `epics` `unit tests` are failing with timout, couldn't find information regarding it in sensible timeframe.
- `phonebook/*` components are cleaned for the review, other components are made for fast `prototyping` and still `under development` in template