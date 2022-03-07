FROM node:17-alpine

ENV NODE_ENVIRONMENT=production

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]