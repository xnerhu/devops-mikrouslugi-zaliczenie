FROM node:18-alpine

WORKDIR /usr/src/app

RUN npm install pnpm --global

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm build

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
