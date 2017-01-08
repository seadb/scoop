const bcrypt = require('bcrypt')
const jwt    = require('jsonwebtoken');
const userModel  = require('../user/user-model.js')
const Users = new userModel();
const config = require('../config/config').token

const login = (req, res, next) => {
  Users.getOne(req.body.email)
    .then((user) => {
      const bool = bcrypt.compareSync(req.body.password, user.password);
      if (!bool) { //
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password.'
        });
      }
      else {
        const token = jwt.sign({ sub: user.id }, config.secret, { 
          expiresIn: config.expiresIn 
        })
        res.json({
          success: true,
          message: 'Login successful',
          token: token
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        error: err
      });
    });
}

const logout = () => {
  return;
}

const register = (req, res, next) => {
  req.body.age = parseInt(req.body.age);
  const user = new userModel(req.body);
  user.save()
    .then((user) => {
      return jwt.sign({ sub: user.id }, config.secret, {
        expiresIn: config.expiresIn 
      });
    })
    .then((token) => {
      res.status(200).json({
        status: 'success',
        message: 'Registered user and logged in',
        token: token
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error'
      });
    });
}


module.exports = {
  login: login,
  logout: logout,
  register: register
}
