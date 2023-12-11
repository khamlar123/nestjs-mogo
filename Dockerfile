FROM node:16
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 3030
EXPOSE $PORT
CMD [ "node" , "index.js" ] 