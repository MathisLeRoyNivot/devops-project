#Pull mariadb:10.4.12 on Docker Hub
FROM mariadb:10.4.12 
COPY dump_data.sql /docker-entrypoint-initdb.d/

# Copy script and crontab
WORKDIR /usr/src/devops-project-prod
COPY db_backup.sh .
COPY crontab .

# Setup the custom configuration
ADD my.cnf /etc/mysql/my.cnf

# Set various default configuration
ENV MYSQL_EXPIRE_LOGS_DAYS     10
ENV MYSQL_MAX_ALLOWED_PACKET   128M
ENV MYSQL_MAX_CONNECTIONS      30

#Expose port
EXPOSE 3306

#Install Cron
RUN apt-get -y install cron -y

# Add crontab file in the cron directory
ADD crontab /etc/cron.d/crontab

RUN chmod +x /usr/src/devops-project-prod/db_backup.sh
# Give execution rights on the cron job
RUN chmod 644 /etc/cron.d/crontab
RUN chmod +x /etc/cron.d/crontab

# Create the log file to be able to run tail
RUN touch /var/log/cron.log

# RUN crontab
RUN crontab /etc/cron.d/crontab
ENTRYPOINT ["cron","-f"]