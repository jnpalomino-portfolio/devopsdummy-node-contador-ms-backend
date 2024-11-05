FROM node:22.4.0-alpine3.20
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["node","index.js"]