'use strict';

var config = {};

config.environment = process.env.NODE_ENV || 'development';

// Upload files in memory
config.uploadFilesInMemory = process.env.UPLOAD_FILES_IN_MEMORY || false;

// Populate the DB with sample data
config.seedDB = true;

// Token settings
config.session = {
  secret: process.env.SESSION_SECRET,
  expiration: process.env.SESSION_EXPIRATION || 60*60*24 //24 hours
};

// Server settings
config.server = {
  host: process.env.NODE_HOST || '0.0.0.0',
  port: process.env.NODE_PORT || 3000
};

// Postgres settings
config.postgres = {
  connectionString: process.env.POSTGRES_CONNECTION_STRING
};


// Export configuration object
module.exports = config;
