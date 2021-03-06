const friendModel = require('./friend-model')
const Friends = new friendModel()
const userModel = require('../user/user-model')
const Users = new userModel()

module.exports = {
  add: (req, res, next) => {
    const id = parseInt(req.params.id)
    const lookup = Users.lookup(id)
    const add = lookup.then((friend) => {
      return Friends.add(req.user.id, id, friend)
    })
    Promise.all([lookup, add])
      .then((results) => {
        res.status(200).json(results[0])
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: 'Failed to add ' + req.params.id + ' as a friend'
        })
      });
  },
  all: (req, res, next) => {
    const id = parseInt(req.params.id)
    Friends.all(id)
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: 'Failed to fetch all friends'
        })
      });
  },
  delete: (req, res, next) => {
    const id = parseInt(req.params.id)
    Users.one(id)
      .then((user) => {
        return Friends.delete(req.user.id, id);
      })
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: 'Failed to delete friend ' + req.params.id
        })
      });
  },
  reciprocal: (req, res, next) => {
    const id = parseInt(req.params.id)
    Friends.reciprocal(id)
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: 'Failed to fetch reciprocal friends'
        })
      });
  },
  followers: (req, res, next) => {
    Friends.followers(req.user.id)
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: 'Failed to fetch followers'
        })
      });
  }

}
