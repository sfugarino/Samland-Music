# build stage
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist/samland/ /usr/share/nginx/html
COPY server.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200 80
CMD ["nginx", "-g", "daemon off;"]