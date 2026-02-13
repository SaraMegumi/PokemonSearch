# Usa Node LTS Alpine (imagem leve)
FROM node:lts-alpine

# Diretório de trabalho
WORKDIR /app

# Copia apenas package.json primeiro (melhor cache)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia restante do projeto
COPY . .

# Comando padrão (modo desenvolvimento)
CMD ["npm", "run", "dev"]