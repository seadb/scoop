'use strict';
const promise = require('bluebird');

var config = {};

config.environment = process.env.NODE_ENV || 'development';

// Upload files in memory
config.uploadFilesInMemory = process.env.UPLOAD_FILES_IN_MEMORY || false;

// Populate the DB with sample data
config.seedDB = true;

// Token settings
config.token = {
  secret: process.env.TOKEN_SECRET,
  expiresIn: {
    expiresIn: process.env.TOKEN_EXPIRES_IN || 60*60*24 //24 hours
  }
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

config.pgp = {
  promiseLib: promise
};

var whitelist = ['http://localhost:8000', 'http://localhost:8100']

config.cors = {
  origin: (origin, callback) => {
    var error = 'Request to '+ origin +' not valid'
    const inWhitelist = whitelist.indexOf(origin) > -1
    callback(inWhitelist ? null : error, inWhitelist)
  },
  optionsSuccessStatus: 200
}

// Export configuration object
module.exports = config;
