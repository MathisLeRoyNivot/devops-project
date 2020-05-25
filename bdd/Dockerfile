#Pull mariadb:10.4.12 on Docker Hub
FROM mariadb:10.4.12 
COPY dump_data.sql /docker-entrypoint-initdb.d/

# Setup the custom configuration
ADD my.cnf /etc/mysql/my.cnf

# Set various default configuration
ENV MYSQL_EXPIRE_LOGS_DAYS     10
ENV MYSQL_MAX_ALLOWED_PACKET   128M
ENV MYSQL_MAX_CONNECTIONS      30

#Expose port
EXPOSE 3306
# Create the CA certificate
RUN mkdir /etc/mysql/ssl
WORKDIR /etc/mysql/ssl
RUN apt update && apt upgrade -y && apt install openssl -y
RUN openssl genrsa 2048 > ca-key.pem
RUN openssl req -new -x509 -nodes -days 365000 -key ca-key.pem -out ca-cert.pem -subj "/C=FR/ST=France/L=Nantes/O=Ynov/CN=devops"

# Create the server certificate
RUN openssl req -newkey rsa:2048 -days 365000 -nodes -keyout server-key.pem -out server-req.pem -subj "/C=FR/ST=France/L=Nantes/O=Ynov/CN=devops"
RUN openssl rsa -in server-key.pem -out server-key.pem
RUN openssl x509 -req -in server-req.pem -days 365000 -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem 

# Create the client certificate
RUN openssl req -newkey rsa:2048 -days 365000 -nodes -keyout client-key.pem -out client-req.pem -subj "/C=FR/ST=France/L=Nantes/O=Ynov/CN=devops"
RUN openssl rsa -in client-key.pem -out client-key.pem
RUN openssl x509 -req -in client-req.pem -days 365000 -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 -out client-cert.pem

