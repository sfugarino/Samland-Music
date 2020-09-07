FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY .babelrc ./

RUN npm install

COPY tsconfig.json ./

COPY ./src ./src

RUN npm run build

FROM node:lts-alpine AS release

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
EXPOSE 8080

CMD ["node", "./dist/index.js"]