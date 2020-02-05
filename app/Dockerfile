FROM node:12.14-alpine

#Establecer directorio de trabajo
WORKDIR /app

#Instala los paquetes existentes en el package.json
COPY package.json .
RUN npm install --quiet

COPY app.js .
COPY api ./api

EXPOSE 8080
CMD ["npm", "start"]