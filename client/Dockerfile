# Nginx static server alpine
FROM nginx:1.15.5-alpine

MAINTAINER James Smith <james.smith@heig-vd.ch>

# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /src
COPY package*.json /src/
RUN npm install
COPY ./ /src/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.14.0-alpine
COPY --from=build-stage /src/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf