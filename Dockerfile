# Use a imagem base do Node.js
FROM node:18-bullseye AS bot

# Configura o diretório de trabalho para /app
WORKDIR /app

# Instala o FFmpeg
RUN apt-get update && apt-get install -y ffmpeg

# Copia apenas os arquivos de dependência primeiro para aproveitar o cache do Docker
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos para o diretório de trabalho
COPY . .

# Define variáveis de ambiente se necessário
ARG RAILWAY_STATIC_URL
ARG PUBLIC_URL
ARG PORT

# Comando para iniciar a aplicação
CMD ["npm", "start"]
