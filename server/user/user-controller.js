'use strict';
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
  Users.lookup(id)
    .then(results => {
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

const lookup = (req, res, next) => {
  let input
  if (req.body.email) { input = req.body.email }
  else if (req.params.id) { input = parseInt(req.params.id) }
  Users.lookup(input)
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      res.status(200).json(false)
    })
}

module.exports = {
  all: all,
  byID: byID,
  byEmail: byEmail,
  create: create,
  update: update,
  lookup: lookup
//  remove: remove
};
