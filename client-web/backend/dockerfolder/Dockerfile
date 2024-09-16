FROM node:19-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN yarn install && yarn cache clean

COPY ./ ./

RUN run build

EXPOSE 3000

CMD ["node", "app.js"]