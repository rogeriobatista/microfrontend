FROM node:18-alpine

WORKDIR /react-vite-app

EXPOSE 5174

COPY package.json *-lock.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "run", "dev"]