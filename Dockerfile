FROM --platform="linux/amd64" node:slim

ENV CDN_URI https://cdn.mama.ovh/

WORKDIR /app
COPY ./uploader ./
RUN npm i
COPY . .
EXPOSE 3000
CMD npm start