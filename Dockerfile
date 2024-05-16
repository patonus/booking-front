FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG NEXT_PUBLIC_API_URL=http://localhost/api
RUN NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL npm run build

EXPOSE 3000

CMD ["npm", "start"]