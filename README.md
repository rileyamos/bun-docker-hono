# bun-docker-hono

Starter template for a hono app running on bun deployed via docker. The dockerfile uses bun to build the app into a binary. It also contains a github action to deploy to dockerhub.

Setup:

In your respository settings add the following:
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

In the dockerfile change the following:
- Replace the `namespace/respository:latest` with your dockerhub repo, repository & tag.

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000

To test:

```sh
bun test
```

To build the docker file:

```sh
docker build -t <image-name> .
docker run -p <port>:<port> <image-name>
```
