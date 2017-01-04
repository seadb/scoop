var users = require('./user-repository.js');

function getUsers(req, res, next) {
  db.any('select * from users')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getUserById(req, res, next) {
  var userId = parseInt(req.params.id);
  users.getUserById(userId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getUserByEmail(req, res, next) {
  var userId = parseInt(req.params.id);
  users.getUserByEmail(req.body.email)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createUser(req, res, next) {
  req.body.age = parseInt(req.body.age);
  var sql ='INSERT INTO users(email, password, first_name, last_name, bio, ' +
      'age, sex) VALUES(${email}, ${password}, ${firstName}, ${lastName}, ' +
      '${bio}, ${age}, ${sex})' 
  db.none(sql, req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//function updateUser(req, res, next) {
//  db.none('update users set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
//    [req.body.name, req.body.breed, parseInt(req.body.age),
//      req.body.sex, parseInt(req.params.id)])
//    .then(function () {
//      res.status(200)
//        .json({
//          status: 'success',
//          message: 'Updated user'
//        });
//    })
//    .catch(function (err) {
//      return next(err);
//    });
//}

//function removeUser(req, res, next) {
//  var pupID = parseInt(req.params.id);
//  db.result('delete from users where id = $1', pupID)
//    .then(function (result) {
//      /* jshint ignore:start */
//      res.status(200)
//        .json({
//          status: 'success',
//          message: `Removed ${result.rowCount} user`
//        });
//      /* jshint ignore:end */
//    })
//    .catch(function (err) {
//      return next(err);
//    });
//}


module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
  getUserByEmail: getUserByEmail,
  createUser: createUser,
//  updateuser: updateUser,
//  removeuser: removeUser
};
