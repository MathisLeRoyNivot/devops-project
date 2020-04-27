#Pull mariadb:10.4.12 on Docker Hub
FROM mariadb:10.4.12 
WORKDIR /usr/src/
COPY dump_data.sql /docker-entrypoint-initdb.d/

# Setup the custom configuration
ADD my.cnf /etc/mysql/my.cnf

# Set various default configuration
ENV MYSQL_EXPIRE_LOGS_DAYS     10
ENV MYSQL_MAX_ALLOWED_PACKET   128M
ENV MYSQL_MAX_CONNECTIONS      30

#Expose port
EXPOSE 3306
