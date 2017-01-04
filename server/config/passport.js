const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const users = require('../user/user-repository')

const comparePassword = (userPassword, databasePassword) => {
  return bcrypt.compareSync(userPassword, databasePassword);
}
const configPassport = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    users.getUserById(id)
    .then((user) => { done(null, user); })
    .catch((err) => { done(err,null); });
  });
  
  passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function (email, password, done) {
      // check to see if the username exists
      users.getUserByEmail(email)
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
  }));

}

module.exports = configPassport;
