#Pull mariadb:10.4.12 on Docker Hub
FROM mariadb:10.4.12 
COPY dump_data.sql /docker-entrypoint-initdb.d/

# Setup the custom configuration
ADD my.cnf /etc/mysql/my.cnf

COPY . /etc/mysql/
WORKDIR /etc/mysql/

#Expose port
EXPOSE 3306
