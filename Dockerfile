FROM node:8.11-alpine

WORKDIR /application

COPY package*.json /application/

RUN npm install npm;

COPY . /application/
