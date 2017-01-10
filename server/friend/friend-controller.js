const friendModel = require('./friend-model')
const Friends = new friendModel();

module.exports = {
  add: (req, res, next) => {
    console.log(req.user);
    const id = parseInt(req.params.id)
    Friends.add(req.user.id, req.params.id)
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
    const id = parseInt(req.params.id)
    Friends.all(id)
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
  delete: (req, res) => {
  },
  reciprocal: (req, res) => {
  }
}
