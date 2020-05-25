#Pull mariadb:10.4.12 on Docker Hub
FROM mariadb:10.4.12 
COPY dump_data.sql /docker-entrypoint-initdb.d/

# Copy script and crontab
COPY db_backup.sh crontab /usr/src/devops-project-prod/

# Setup the custom configuration
ADD my.cnf /etc/mysql/my.cnf

COPY . /etc/mysql/
WORKDIR /etc/mysql/

#Expose port
EXPOSE 3306

#Install Cron
RUN apt-get update -y
RUN apt-get -y install cron -y

# Add crontab file in the cron directory
ADD ./crontab /etc/cron.d/crontab

RUN chmod +x /usr/src/devops-project-prod/db_backup.sh
# Give execution rights on the cron job
RUN chmod 644 /etc/cron.d/crontab
RUN chmod +x /etc/cron.d/crontab

# Create the log file to be able to run tail
RUN touch /var/log/cron.log

# RUN crontab
RUN crontab /etc/cron.d/crontab
ENTRYPOINT ["cron","-f"]
