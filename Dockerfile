FROM node:18-bullseye as bot

# Instale o FFmpeg
RUN apk update && apk add ffmpeg
RUN npm install
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
ARG RAILWAY_STATIC_URL
ARG PUBLIC_URL
ARG PORT
CMD ["npm", "start"]
