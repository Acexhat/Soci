FROM node:18-alpine

WORKDIR /src

COPY package*.json ./

RUN rm -rf node_modules && yarn install --frozen-lockfile

COPY . .

RUN yarn build

CMD ["node", "dist/main.js"]