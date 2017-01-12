'use strict';
const db = require('../db');

function Friend() {
  this.all = (userId) => {
    var sql = 'SELECT users.* ' +
              'FROM users ' +
              'JOIN friends ' +
              'ON users.id=friends.to_user_id ' +
              'WHERE friends.from_user_id = $1;';

    return db.any(sql, userId);
  };

  this.add = (from, to) => {

    console.log(from + typeof(from) + to + typeof(to))
     var sql = 'INSERT INTO friends (from_user_id, to_user_id) ' +
               'VALUES ($1, $2) ' +
               'RETURNING friends.*;';
     var params = [from, to];
     return db.one(sql, params);
  };

  this.delete = (from, to) => {
    var sql = 'DELETE FROM friends ' +
              'WHERE from_user_id = $1 ' +
              'AND to_user_id = $2';
    var params = [from, to];
    return db.none(sql, params);
  };

  this.reciprocal = (userId) => {

    var sql = 'SELECT users.* ' +
              'FROM users ' +
              'JOIN friends f ' +
                'ON users.id=f.to_user_id ' +
              'JOIN friends m ' +
                'ON f.to_user_id = m.from_user_id ' +
                'AND m.to_user_id = f.from_user_id ' +
              'WHERE f.from_user_id = $1';

    return db.any(sql, userId);
  }
}

module.exports = Friend;
