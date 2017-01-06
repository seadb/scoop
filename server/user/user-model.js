'use strict';

var promise = require('bluebird');
var pgp = require('pg-promise')({promiseLib: promise});
var config = require('../config/config.js');
var connectionString = config.postgres.connectionString;
var db = pgp(connectionString);

//const camelToUnderscore = function(user) {
//  var newUser = {};
//  for(var prop in user) {
//    var newProp = prop.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
//    newUser[newProp] = user[prop]
//  }
//  return newUser;
//}

function User() {

  this.id = '';
  this.email = '';
  this.password = '';
  this.firstName = '';
  this.lastName = '';
  this.bio = '';
  this.age = 0;
  this.sex = ''
  this.created = null;
  this.createUser = function(user) {
    //user = camelToUnderscore(user);
    //var sql ='INSERT INTO users(email, password, first_name, last_name, bio, ' +
    //  'age, sex) VALUES(${email}, ${password}, ${firstName}, ${lastName}, ' +
    //  '${bio}, ${age}, ${sex})' 
    var sql ='INSERT INTO users (email, password, first_name) VALUES(${email}' +
      ', ${password}, ${firstName})';
    return db.none(sql, user);
  }
  this.getUsers = function() {
    return db.any('SELECT * FROM users');

  };
  this.getUserByEmail = function(email) {
    return db.one('SELECT * FROM users WHERE email = $1', email);
  };
  this.getUserById = function(userId) {
    userId = parseInt(userId);
    return db.one('SELECT * FROM users WHERE id = $1', userId);
  };
  this.encryptPassword = function(next) {  
    const user = this,
          SALT_FACTOR = 5;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  }
}

module.exports = User;

