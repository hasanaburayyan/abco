FROM node:latest

RUN mkdir "Abco_printing_website"
RUN npm install -g @angular/cli

COPY . Abco_printing_website

CMD /bin/bash -c "cd Abco_printing_website; ng serve --host=172.17.0.2 --port=4200"
