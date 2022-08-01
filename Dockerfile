FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY pages ./pages
COPY public ./public
COPY styles ./styles

RUN yarn next build

EXPOSE 3000

CMD ["yarn","run","next","start"]