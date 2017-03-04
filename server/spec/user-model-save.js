const test = require('tape');
const userModel = require('../user/user-model')

const testUser = {
  email: 'blah@email.com',
  password: 'password',
  firstName: 'john',
  lastName: 'smith'
}

test('Users Model - Save - First Name', function (t) {
  t.plan(1)
  const User = new userModel(testUser);
  return User.save()
    .then( function success(result) {
      return t.equal(result.first_name, testUser.firstName);
    })
});

test('Users Model - Save - Last Name', function (t) {
  t.plan(1)
  const User = new userModel(testUser);
  return User.save()
    .then( function success(result) {
      return t.equal(result.last_name, testUser.lastName);
    }
  )
});

test('User Model - Save - Email', function (t) {
  t.plan(1)
  const User = new userModel(testUser);
  return User.save()
    .then(function success(result) {
      return t.equal(result.email, testUser.email);
    }
  )
});
