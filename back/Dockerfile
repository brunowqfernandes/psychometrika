FROM node:alpine
WORKDIR /back
COPY package*.json /back/
RUN npm install
COPY . /back/
EXPOSE 3080
CMD ["npm", "start"]