FROM node:14

WORKDIR /main

COPY . /main

RUN npm install