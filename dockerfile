FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY ./nginx/portfolio.conf /etc/nginx/conf.d/portfolio.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/conf.d/nginx.conf"]