var promise = require('bluebird');
var humps = require('humps');
var axios = require('axios');

const whitelist = ['http://localhost:*', 'http://localhost:3000', 'http://localhost:8100'];

const camelizeColumnNames = (data) => {
  var template = data[0];
  for (var prop in template) {
    var camel = humps.camelize(prop);
    if (!(camel in template)) {
      for (var i = 0; i < data.length; i++) {
        var d = data[i];
        d[camel] = d[prop];
        delete d[prop];
      }
    }
  }
}

const config = {
  environment: process.env.NODE_ENV || 'development',
  uploadFilesInMemory: process.env.UPLOAD_FILES_IN_MEMORY || false,
  token: {
    secret: process.env.TOKEN_SECRET,
    expiresIn: {
      expiresIn: process.env.TOKEN_EXPIRES_IN || 60*60*24 //24 hours
    }
  },
  // Server settings
  server: {
    host: process.env.NODE_HOST || '0.0.0.0',
    port: process.env.NODE_PORT || 3000
  },
  postgres: {
    connectionString: process.env.POSTGRES_CONNECTION_STRING
  },
  pgp: {
    promiseLib: promise,
    receive: (data) => {
      camelizeColumnNames(data)
    }
  },
  cors: {
			origin: 'http://localhost:8100',
      optionsSuccessStatus: 200
	}
}


module.exports = config
