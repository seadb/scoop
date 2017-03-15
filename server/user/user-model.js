'use strict';

const bcrypt = require('bcrypt');
const db = require('../db');
const friendModel = require('../friend/friend-model')
const Friend = new friendModel();

const SALT_FACTOR = 5;

// Uses props from User.fields to generate insert SQL statement
const generateSQL = function(props) {
  let columns = ''
  let values = ''
  for (const prop in props) {
    values = values + '${' + prop + '}, '
    const newProp = prop.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
    columns = columns + newProp + ', '
  }
  columns = columns.slice(0, columns.length-2)
  values = values.slice(0, values.length-2)
  const sql ='INSERT INTO users (' + columns + ') VALUES (' + values + ') '
    + 'RETURNING *'
  return sql
}

function User(obj) {
  
  this.fields = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    bio: '',
    age: 0,
    sex: ''
  }

  for (const prop in obj) {
    if (this.fields.hasOwnProperty(prop)) {
      this.fields[prop] = obj[prop]
    }
  }

  this.save = () => {
    //const sql ='INSERT INTO users(email, password, first_name, last_name, bio, ' +
    //  'age, sex) VALUES(${email}, ${password}, ${firstName}, ${lastName}, ' +
    //  '${bio}, ${age}, ${sex})' 

    const sql = generateSQL(this.fields)
    return bcrypt.hash(this.fields.password, SALT_FACTOR)
      .then((hash) => {
        this.fields.password = hash
        return db.one(sql, this.fields)
      });
  }
  this.all = function() {
    return db.any('SELECT * FROM users')
  };
  this.one = function(input) {
    if (typeof(input) === "string") {
      const email = input
      const user = db.one('SELECT * FROM users WHERE email = $1', email)
      const friends = user.then(user => {
        return Friend.all(user.id)
      })
      return Promise.all([user, friends])
    }
    else if (typeof(input) === "number") {
      const id = input
      const user = db.one('SELECT * FROM users WHERE id = $1', id)
      const friends = Friend.all(id)
      return Promise.all([user, friends])
    }
  };
}

module.exports = User

