#Pull mariadb:10.4.12 on Docker Hub
FROM mariadb:10.4.12 
ADD dump_data.sql /docker-entrypoint-initdb.d/

# Setup the custom configuration
ADD my.cnf /etc/mysql/my.cnf

# Set various default configuration
ENV MYSQL_EXPIRE_LOGS_DAYS     10
ENV MYSQL_MAX_ALLOWED_PACKET   128M
ENV MYSQL_MAX_CONNECTIONS      30

COPY . /etc/mysql/
WORKDIR /etc/mysql/

RUN apt update && apt install openssl

#Expose port
EXPOSE 3306

# ADD encryption.cnf /etc/mysql/conf.d/
# ADD mariadb_encryption.txt /etc/mysql/mariadb_encryption.txt
# RUN apt update && apt install -y openssl
# RUN openssl rand -hex 16 > /etc/mysql/mariadb_encryption.txt
# RUN echo "1;3e27544cbb53d144c5ed10af54f8e033" >>  /etc/mysql/mariadb_encryption.txt
# RUN openssl enc -base64 -md sha256 -in /etc/mysql/mariadb_encryption.txt -out /etc/mysql/mariadb_encryption.key