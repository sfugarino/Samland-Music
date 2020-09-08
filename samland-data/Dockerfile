FROM mongo:bionic
COPY create-artists.js /docker-entrypoint-initdb.d/
COPY create-albums.js /docker-entrypoint-initdb.d/

EXPOSE 27017
CMD ["--port 27017"]

# Set default container command
ENTRYPOINT /usr/local/bin/docker-entrypoint.sh --bind_ip_all