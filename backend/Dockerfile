FROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 2000

CMD [ "node", "index.js" ]
