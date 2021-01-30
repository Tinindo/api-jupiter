# Seleciona versão do node
FROM node:12.18.3-alpine

# Define diretório da aplicação
WORKDIR /usr/app

# Copia arquivos do diretório
COPY package.json yarn.lock ./

# Instala dependências do projeto
RUN npm install

# Copia todo conteúdo do diretório (ignorando node_modules na .dockerignore)
COPY . .

# Roda script de produção
CMD ["npm", "start"]

#Expõe a porta 3030
EXPOSE 3030
