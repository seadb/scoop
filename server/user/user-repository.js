var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var config = require('../config/config.js');
var connectionString = config.postgres.connectionString;
var db = pgp(connectionString);

UserRepository = {
  getUserByEmail: function (email) {
    return db.one('SELECT * FROM users WHERE email = $1', email);
  },
  getUserById: function (userId) {
    return db.one('SELECT * FROM users WHERE id = $1', userId);
  }
}

module.exports = UserRepository;
