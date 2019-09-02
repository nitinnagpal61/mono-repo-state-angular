### STAGE 1: Build ###
FROM node:10-alpine as builder

WORKDIR /src
COPY package.json ./
RUN npm i

COPY . .
#RUN npm run build
RUN npm run build:core
RUN npm run build:admin-lib
RUN npm run build:app1
RUN npm run build:app2

RUN rm -f ~/.npmrc

### STAGE 2: Setup ###
FROM nginx:1.14.1-alpine
EXPOSE 4350

# Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /src/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]