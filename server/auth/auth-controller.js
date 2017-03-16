const bcrypt = require('bcrypt')
const jwt    = require('jsonwebtoken');
const userModel  = require('../user/user-model.js')
const Users = new userModel();
const config = require('../config').token
const dberr = require('../error')

const login = (req, res, next) => {
  const userPromise = Users.one(req.body.email);
  const compare = userPromise.then((results) => {
    const user = results[0];
    return bcrypt.compare(req.body.password, user.password);
  })
  Promise
    .all([userPromise, compare])
    .then(results => {
      const user = results[0][0];
      const friends = results[0][1]
      const bool = results[1];
      if (!bool) {
        res.status(401).json({
          success: false,
          message: 'Authentication failed. Wrong password.'
        });
      }
      else {
        const token = jwt.sign({sub: user.id}, config.secret, config.expiresIn);
        res.status(200).json({
          user: user,
          friends: friends,
          token: token
        });
      }
    })
    .catch((err) => {
      dberr(err, res)
      res.status(401).json({
        status: 'error',
        error: err,
        message: 'User not found with email ' + req.body.email
      });
    });
}

const logout = () => {
  return;
}

const register = (req, res, next) => {
  req.body.age ? parseInt(req.body.age) : '';
  const User = new userModel(req.body);
  User.lookup(req.body.email)
    .then((results) => {
      return res.status(401).json({
        status: 'error',
        error: 'The email address ' + req.body.email +
          ' is already registered to a user account'
      });
    })
    .catch((err) => {
      dberr(err, res)
      const user = User.save()
      const token = user.then((user) => {
          return jwt.sign({ sub: user.id }, config.secret, config.expiresIn);
      })
      Promise.all([user, token])
        .then((results) => {
          res.status(200).json({
            user: results[0],
            friends: [],
            token: results[1]
          });
        })
        .catch((err) => {
          dberr(err, res)
          res.status(500).json({
            status: 'error',
            error: err
          });
        });
    })
}

const verify = (req, res, next) => {
  console.log('verify')
  res.status(200).json({
    user: req.user,
    friends: req.friends
  })
}

module.exports = {
  login: login,
  logout: logout,
  register: register,
  verify: verify
}
