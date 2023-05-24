FROM node:16

WORKDIR /toolBox_Back

COPY . .

RUN npm install

EXPOSE 3003

CMD ["npm", "start"]
