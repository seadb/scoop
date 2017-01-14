const userModel = require('../user/user-model')
const Users = new userModel()
const friendModel = require('./friend-model')
const Friends = new friendModel()

module.exports = {
  add: (req, res, next) => {
    const id = parseInt(req.params.id)
    Users.one(id)
      .then((user) => {
        return Friends.add(req.user.id, id);
      })
      .then((data) => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Added ' + req.params.id + ' as a friend'
          });
      })
      .catch((err) => {
        return next(err);
      });
  },
  all: (req, res, next) => {
    Friends.all(req.user.id)
      .then((data) => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL friends'
          });
      })
      .catch((err) => {
        return next(err);
      });
  },
  delete: (req, res, next) => {
    const id = parseInt(req.params.id)
    Users.one(id)
      .then((user) => {
        return Friends.delete(req.user.id, id);
      })
      .then((data) => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Deleted friend ' + req.params.id
          });
      })
      .catch((err) => {
        return next(err);
      });
  },
  reciprocal: (req, res, next) => {
  }
}
