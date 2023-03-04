FROM ubuntu:jammy-20230126
ARG HOST_USER
ARG HOST_USER_ID

WORKDIR /var/app/googlemapscraperpro
RUN apt-get update
RUN apt install curl -y
RUN cd ~ && curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh && bash /tmp/nodesource_setup.sh && apt install nodejs -y
RUN node -v
RUN npm i -g nx
RUN npm i -g @angular/cli
RUN npm i -g @nrwl/cli
RUN npm install -g @ionic/cli native-run cordova-res
RUN apt install nano -y
RUN apt install htop -y
RUN adduser --disabled-password --gecos "" ${HOST_USER} -u ${HOST_USER_ID}
RUN usermod -a -G ${HOST_USER} www-data

RUN echo 'alias serve="cd /var/app/googlemapscraperpro/wassim && ng serve --host=0.0.0.0 --port=4200"' >> /root/.bashrc
RUN echo 'alias translate="cd /var/app/googlemapscraperpro/wassim && ng extract-i18n --output-path src/locale --format=json"' >> /root/.bashrc