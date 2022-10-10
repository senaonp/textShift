FROM nginx

EXPOSE 8003

WORKDIR /app

COPY . .

COPY ./config/nginx.conf /etc/nginx/nginx.conf

RUN chown -R nginx:nginx /app
