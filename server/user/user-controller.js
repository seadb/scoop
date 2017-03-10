var userModel = require('./user-model');

const all = (req, res, next) => {
  var Users = new userModel();
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
  var id = parseInt(req.params.id);
  var Users = new userModel();
  Users.one(id)
    .then((user) => {
      res.status(200).json(user)
        //.json({
        //  status: 'success',
        //  user: data,
        //  message: 'Retrieved one user'
        //});
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: 'Failed to retrieve user by id'
      })
    });
}

const byEmail = (req, res, next) => {
  var Users = new userModel();
  Users.one(req.body.email)
    .then((user) => {
      res.status(200).json(user)
      //  .json({
      //    status: 'success',
      //    user: data,
      //    message: 'Retrieved ONE user'
      //  });
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
  const user = new userModel(req.body);
  user.save()
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
