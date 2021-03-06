FROM node:14
COPY . .
# Create app directory
WORKDIR /src

RUN npm install

EXPOSE 8080
CMD [ "node", "app.js" ]