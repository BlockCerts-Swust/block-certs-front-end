FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

ADD frontend.conf /etc/nginx/conf.d/

COPY dist/ /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html
RUN chmod -R a+rx *