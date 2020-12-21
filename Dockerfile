FROM node:12-alpine

COPY package.json package-lock.json ./

RUN npm ci

COPY index.js keycloak-auth-hook.js ./

EXPOSE 4242

CMD node index.js
