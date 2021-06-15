# syntax=docker/dockerfile:1

FROM node:alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install --production=false && npm install tsc -g

COPY . .

RUN npm run build

EXPOSE 4001
CMD npm start