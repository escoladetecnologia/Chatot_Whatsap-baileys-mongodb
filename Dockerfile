FROM node:18-bullseye as bot
RUN apt-get update -y && \
    apt-get install -y ffmpeg

WORKDIR /app
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
ARG RAILWAY_STATIC_URL
ARG PUBLIC_URL
ARG PORT
CMD ["npm", "start"]
