# stage: building app in docker image
FROM node:10-alpine as node-build

ENTRYPOINT /bin/bash

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY . ./

USER node

RUN yarn
RUN yarn build

# Stage 2 - serve the production build
FROM node:10-alpine

COPY --from=node-build /home/node/app/build ./

EXPOSE 8080

CMD ["node","app.bundle.js"]