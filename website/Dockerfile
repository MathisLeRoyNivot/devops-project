# Build
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# Run
FROM socialengine/nginx-spa
WORKDIR /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/
# RUN rm -rf /usr/share/nginx/html/*
# COPY --from=build /usr/src/app/dist/website /usr/share/nginx/html
RUN rm -rf /app/*
COPY --from=build /usr/src/app/dist/website /app

EXPOSE 4200

