FROM nexus.serrala.com:8085/serrala/nginx:stable
MAINTAINER TKL

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/vendor-frontend-ui /usr/share/nginx/html 

EXPOSE 80
