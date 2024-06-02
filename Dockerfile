FROM quay.io/taira_makino/taira_tech:latest
RUN git clone https://github.com/Anonphoenix007/CH13 /root/CH13
WORKDIR /root/CH13/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["node", "."]
 
