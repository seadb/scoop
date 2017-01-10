const config = require('./config');
const pgp = require('pg-promise')(config.pgp);
const db = pgp(config.postgres.connectionString);

module.exports = db;
