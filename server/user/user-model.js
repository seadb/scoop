'use strict';

const promise = require('bluebird');
const pgp = require('pg-promise')({promiseLib: promise});
const config = require('../config');
const connectionString = config.postgres.connectionString;
const db = pgp(connectionString);
const bcrypt = require('bcrypt');

const SALT_FACTOR = 5;

//const camelToUnderscore = function(user) {
//  const newUser = {};
//  for(const prop in user) {
//    const newProp = prop.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
//    newUser[newProp] = user[prop]
//  }
//  return newUser;
//}

function User(obj) {

  this.id = '';
  this.email = '';
  this.password = '';
  this.firstName = '';
  this.lastName = '';
  this.bio = '';
  this.age = 0;
  this.sex = ''
  this.created = null;

  for (const prop in obj) {
    if (this.hasOwnProperty(prop)) {
      this[prop] = obj[prop];
    }
  }

  this.save = () => {
    //const sql ='INSERT INTO users(email, password, first_name, last_name, bio, ' +
    //  'age, sex) VALUES(${email}, ${password}, ${firstName}, ${lastName}, ' +
    //  '${bio}, ${age}, ${sex})' 
    this.encryptPassword( () => {
    })
    const sql ='INSERT INTO users (email, password, first_name) VALUES (${email}' +
    ', ${password}, ${firstName}) RETURNING *';
    return db.one(sql, this);
  }
  this.all = function() {
    return db.any('SELECT * FROM users');
  };
  this.one = function(input) {
    if (typeof(input) === "string") {
      const email = input
      return db.one('SELECT * FROM users WHERE email = $1', email);
    }
    else if (typeof(input) === "number") {
      const id = input;
      return db.one('SELECT * FROM users WHERE id = $1', id);
    }
  };
  this.encryptPassword = (next) => {  

    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
      });
    });
  }
}

module.exports = User;

