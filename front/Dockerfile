FROM node:alpine
WORKDIR /front
COPY package*.json /front/
RUN npm install
COPY . /front/
EXPOSE 3000
CMD ["npm", "run", "dev"]