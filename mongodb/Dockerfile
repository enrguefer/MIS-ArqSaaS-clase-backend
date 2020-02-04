FROM mongo:4.2.3-bionic

# Copy config file
COPY mongod.conf /etc/mongod.conf

# Expose MongoDB port
EXPOSE 27017

# Run application
CMD ["mongod", "--config", "/etc/mongod.conf"]