FROM --platform="linux/amd64" node:slim

ENV CDN_URI https://cdn.mama.ovh/

WORKDIR /app
COPY . ./
RUN mkdir uploads
RUN npm i
EXPOSE 3000
CMD npm start