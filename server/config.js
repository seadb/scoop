import promise from 'bluebird'
import humps from 'humps'
import axios from 'axios'


const whitelist = ['http://localhost:*', 'http://localhost:8000', 'http://localhost:8100']

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
  camelizeColumnNames(data): () => {
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
  },
  pgp: {
    promiseLib: promise,
    receive: function (data) {
      this.camelizeColumnNames(data)
    }
  },
  cors: {
    origin: (origin, callback) => {
      var error = 'Request to '+ origin +' not valid'
      const inWhitelist = whitelist.indexOf(origin) > -1
      callback(inWhitelist ? null : error, inWhitelist)
    },
    optionsSuccessStatus: 200
  }
}


export default config
