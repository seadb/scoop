const tape = require('tape');
const userModel = require('../user/user-model')

const testUser = {
  email: 'blah@email.com',
  password: 'password',
  firstName: 'john',
  lastName: 'smith'
}

tape('User Model Constructor -- email', function (t) {
  t.plan(1)
  const User = new userModel(testUser);
  t.equal(User.fields.email, testUser.email);
})

tape('User Model Constructor -- password', function (t) {
  t.plan(1)
  const User = new userModel(testUser);
  t.equal(User.fields.password, testUser.password);
})

tape('User Model Constructor -- firstName', function (t) {
  t.plan(1)
  const User = new userModel(testUser);
  t.equal(User.fields.firstName, testUser.firstName);
})

tape('User Model Constructor -- lastName', function (t) {
  t.plan(1)
  const User = new userModel(testUser);
  t.equal(User.fields.lastName, testUser.lastName);
})
