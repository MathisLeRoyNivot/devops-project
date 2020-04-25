#Pull mariadb:10.4.12 on Docker Hub
FROM mariadb:10.4.12 
WORKDIR /usr/src/
COPY dump_data.sql /docker-entrypoint-initdb.d/

# Set various default configuration
ENV MYSQL_EXPIRE_LOGS_DAYS     10
ENV MYSQL_MAX_ALLOWED_PACKET   16M
ENV MYSQL_MAX_CONNECTIONS      10
ENV MYSQL_QUERY_CACHE_LIMIT    1M
ENV MYSQL_QUERY_CACHE_SIZE     16M

# Slow query log settings
# Set MYSQL_SLOW_QUERY_LOG to 1 to turn on slow query logging
ENV MYSQL_SLOW_QUERY_LOG      0
ENV MYSQL_LONG_QUERY_TIME     10
ENV MYSQL_LOG_QUERY_NO_INDEX  0

#Expose port
EXPOSE 3306
