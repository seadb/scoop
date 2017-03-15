const userModel = require('./user-model');
const friendModel = require('../friend/friend-model');
const Users = new userModel();
const Friend = new friendModel();
const dberr = require('../error');

const all = (req, res, next) => {
  Users.all()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      dberr(error, res)
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
      res.status(200).json(user)
    })
    .catch((error) => {
      dberr(error, res)
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
      res.status(200).json(user)
    })
    .catch((error) => {
      dberr(error, res)
      res.status(500).json({
        error: error,
        message: 'Failed to retrieve user by email'
      })
    });
}

const create = (req, res, next) => {
  req.body.age = parseInt(req.body.age);
  const User = new userModel(req.body);
  User.save()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      dberr(error, res)
      res.status(500).json({
        error: error,
        message: 'Failed to create user'
      })
    });
}

const update = (req, res, next) => {
  req.body.age ? req.body.age = parseInt(req.body.age): '';
  const id = parseInt(req.params.id);
  Users.one(id)
    .then(results => {
      console.log(results)
      console.log(req.body)
      return Users.update(id, req.body)
    })
    .then(user => {
      res.status(200).json(user)
    })
    .catch((error) => {
      dberr(error, res)
      res.status(500).json({
        error: error,
        message: 'Failed to update user'
      })
    });
}

module.exports = {
  all: all,
  byID: byID,
  byEmail: byEmail,
  create: create,
  update: update
//  remove: remove
};
