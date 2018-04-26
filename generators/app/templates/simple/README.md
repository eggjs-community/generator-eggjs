# <%- name %>

<%- description %>

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### Docker

```bash
$ docker run -p 7001:7001 <%- name %>
```

***Build docker image before using Docker image.***

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.
- Use `npm run docker-build` to build Docker image

[egg]: https://eggjs.org
