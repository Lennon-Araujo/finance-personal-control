FROM node:lts-alpine3.17

WORKDIR /home/node/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "start"]