'use strict';
const db = require('../db')

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
    var sql = 'INSERT INTO friends (from_user_id, to_user_id) ' +
              'VALUES ($1, $2) ' +
              'RETURNING *;'
    var params = [from, to];

    return db.one(sql, params);
  };

  this.delete = (from, to) => {
    var sql = 'DELETE FROM friends ' +
              'WHERE from_user_id = $1 ' +
              'AND to_user_id = $2 ' +
              'RETURNING friends.*;';
    var params = [from, to];
    return db.one(sql, params);
  };

   /* Get a list of users that user A has added as a friend
    * that have also added user A as a friend
    */
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
  this.followers = (userId) => {
    var sql = 'SELECT users.* ' +
              'FROM users ' +
              'JOIN friends ' +
              'ON users.id=friends.from_user_id ' +
              'WHERE friends.to_user_id = $1;';

    return db.any(sql, userId);
  }
}

module.exports = Friend;
