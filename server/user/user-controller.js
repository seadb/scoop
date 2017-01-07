var userModel = require('./user-model');

const getAll = function(req, res, next) {
  var Users = new userModel();
  Users.getAll()
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

const getOneById = function(req, res, next) {
  var props = parseInt(req.params.id);
  var Users = new userModel();
  Users.getOne(userId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

const getOneByEmail = function(req, res, next) {
  var Users = new userModel();
  Users.getOne(req.body.email)
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

const create = function(req, res, next) {
  req.body.age = parseInt(req.body.age);
  const user = new userModel(req.body);
  user.save()
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
  getAll: getAll,
  getOneById: getOneById,
  getOneByEmail: getOneByEmail,
  create: create
//  updateuser: updateUser,
//  removeuser: removeUser
};
