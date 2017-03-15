'use strict';

const bcrypt = require('bcrypt');
const db = require('../db');
const friendModel = require('../friend/friend-model')
const Friend = new friendModel();

const SALT_FACTOR = 5;

// Uses props from User.fields to generate insert SQL statement
const generateRow = function(props) {
  let columns = ''
  let values = ''
  for (const prop in props) {
    values = values + '${' + prop + '}, '
    const newProp = prop.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
    columns = columns + newProp + ', '
  }
  columns = columns.slice(0, columns.length-2)
  values = values.slice(0, values.length-2)
  return {
    columns: columns,
    values: values
  }
}

const generateUpdate = function(props) {
  let assign = ''
  for (const prop in props) {
    const value = '${' + prop + '}'
    const column = prop.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
    assign = assign + column + ' = ' + value + ', '
  }
  assign = assign.slice(0, assign.length-2)
  return assign
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

    const row = generateRow(this.fields)
    const sql = 'INSERT INTO users '
              + '(' + row.columns + ') '
              + 'VALUES (' + row.values + ') '
              + 'RETURNING *;'

    console.log(sql)
    return bcrypt.hash(this.fields.password, SALT_FACTOR)
      .then((hash) => {
        this.fields.password = hash
        return db.one(sql, this.fields)
      });
  }
  this.all = function() {
    const sql = 'SELECT * ' +
                'FROM users;'
    return db.any(sql)
  };
  this.one = function(input) {
    if (typeof(input) === "string") {
      const email = input
      const sql = 'SELECT * ' +
                  'FROM users ' +
                  'WHERE email = $1;'
      const user = db.one(sql, email)
      const friends = user.then(user => {
        return Friend.all(user.id)
      })
      return Promise.all([user, friends])
    }
    else if (typeof(input) === "number") {
      const id = input
      const query = 'SELECT * ' +
                    'FROM users ' +
                    'WHERE id = $1;'
      const user = db.one(query, id)
      const friends = Friend.all(id)
      return Promise.all([user, friends])
    }
  };
  this.update = function(id, updates) {
    const rows = generateUpdate(updates)
    const sql = 'UPDATE users '
              + 'SET ' + rows + ' '
              + 'WHERE id = ${id} '
              + 'RETURNING *;'
    updates.id = id
    return db.one(sql, updates);
  }
}

module.exports = User

