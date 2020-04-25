# Build
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# Run
FROM nginx:1.17.1-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/dist/website /usr/share/nginx/html

