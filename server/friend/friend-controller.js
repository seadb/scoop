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
        res.status(200).json(data)
        //  .json({
        //    status: 'success',
        //    data: data,
        //    message: 'Added ' + req.params.id + ' as a friend'
        //  });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: 'Failed to add ' + req.params.id + ' as a friend'
        })
      });
  },
  all: (req, res, next) => {
    Friends.all(req.user.id)
      .then((data) => {
        res.status(200).json(data)
        //  .json({
        //    status: 'success',
        //    data: data,
        //    message: 'Retrieved ALL friends'
        //  });
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
          //.json({
          //  status: 'success',
          //  data: data,
          //  message: 'Deleted friend ' + req.params.id
          //});
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: 'Failed to delete friend ' + req.params.id
        })
      });
  },
  reciprocal: (req, res, next) => {
    Friends.reciprocal(req.user.id)
      .then((data) => {
        res.status(200).json(data)
        //  .json({
        //    status: 'success',
        //    data: data,
        //    message: 'Retrieved reciprocal friends'
        //  });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: 'Failed to fetch reciprocal friends'
        })
      });
  }

}
