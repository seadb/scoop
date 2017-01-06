const passport = require('passport');
const bcrypt = require('bcryptjs');
const userModel = require('../user/user-model')
const Users = new userModel();

const configPassport = function () {

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    Users.getUserById(id)
    .then((user) => { done(null, user); })
    .catch((err) => { done(err,null); });
  });

  // 'local' login
  passport.use(new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
    },
    function (email, password, done) {
      // check to see if the username exists
      Users.getUserByEmail(email)
        .then(function (user) {
          if (!user) return done(null, false);
          if (!comparePassword(password, user.password)) {
            return done(null, false);
          }
          else {
            return done(null, user);
          }
      })
      .catch(function (err) { return done(err); });
    }
  ));

}

module.exports = configPassport;
