# Use latest node version
FROM node:8.12.0-alpine

MAINTAINER James Smith <james.smith@heig-vd.ch>

# create api directory in container
RUN mkdir -p /server

# set /api directory as default working directory
WORKDIR /server

# only copy package.json initially so that it's recreated only
# if there are changes in package.json
ADD package.json ./

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#RUN npm install
# If you are building your code for production
RUN npm install

# copy all file from current dir to /api in container
COPY . /server/

# expose port 4000
EXPOSE 4000

# cmd to start service
CMD [ "npm", "start" ]