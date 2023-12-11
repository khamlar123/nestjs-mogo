FROM node:12
WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . ./
ENV PORT 3030
EXPOSE $PORT
CMD [ "node" , "dist/main.js" ] 