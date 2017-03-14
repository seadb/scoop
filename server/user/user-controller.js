const userModel = require('./user-model');
const friendModel = require('../friend/friend-model');
const Users = new userModel();
const Friend = new friendModel();

const all = (req, res, next) => {
  Users.all()
    .then((user) => {
      res.status(200).json(user)
      //  .json({
      //    user: data,
      //    message: 'Retrieved ALL users'
      //  });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: 'Failed to retrieve users'
      })
    });
}

const byID = (req, res, next) => {
  const id = parseInt(req.params.id);
  Users.one(id)
    .then(results => {
      const user = results[0]
      user.friends = results[1]
      console.log(user)
      res.status(200).json(user)
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: 'Failed to retrieve user by id'
      })
    });
}

const byEmail = (req, res, next) => {
  Users.one(req.body.email)
    .then(results => {
      const user = results[0]
      user.friends = results[1]
      console.log(user)
      res.status(200).json(user)
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: 'Failed to retrieve user by email'
      })
    });
}

const create = function(req, res, next) {
  req.body.age = parseInt(req.body.age);
  const User = new userModel(req.body);
  User.save()
    .then((user) => {
      res.status(200).json(user)
      //  .json({
      //    status: 'success',
      //    message: 'Inserted one user'
      //  });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: 'Failed to create user'
      })
    });
}

module.exports = {
  all: all,
  byID: byID,
  byEmail: byEmail,
  create: create
//  updateuser: updateUser,
//  removeuser: removeUser
};
