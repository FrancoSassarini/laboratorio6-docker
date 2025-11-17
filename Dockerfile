
# STAGE 1: CONSTRUCCIÓN

FROM node:18 AS construccion


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


RUN npm run build


# STAGE 2: EMPAQUETADO


FROM nginx:stable AS empaquetado


COPY --from=construccion /app/dist /usr/share/nginx/html


EXPOSE 80


