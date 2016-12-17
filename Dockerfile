FROM nginx:stable
ADD ./web /usr/share/nginx/html
ADD ./n.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 755 /etc/nginx/conf.d/default.conf
RUN chmod -R 755 /usr/share/nginx/html
RUN apt-get update
VOLUME /data
RUN find ./ -type f -name *.js \
-or -name *.css \
-or -name *.img \
-or -name *.ico \
-or -name *.png \
-or -name *.html | xargs gzip --best --keep; exit 0
