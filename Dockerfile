FROM node:16-alpine

ENV NODE_ENVIRONMENT=production
ENV PORT=8080

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]