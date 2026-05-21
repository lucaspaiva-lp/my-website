FROM node:20-alpine

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para rodar em modo de desenvolvimento
CMD ["npm", "run", "dev"]