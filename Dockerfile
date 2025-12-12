FROM node:alpine AS node-builder

WORKDIR /backend

RUN apk add git
COPY package*.json .
COPY yarn.lock .
RUN yarn

COPY . .
RUN yarn build

FROM registry.heroiclabs.com/heroiclabs/nakama:3.21.1

COPY --from=node-builder /backend/data/modules/build/*.js /nakama/data/modules/build/
COPY local.yml /nakama/data/