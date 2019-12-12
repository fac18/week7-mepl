const test = require('tape');

const {hashPassword, comparePasswords} = require('../src/queries/encrypt');

test('If the password is being hashed correctly', t => {
    hashPassword('holla', (err, result) => {
        t.equal(err, null, 'error should be null');
        t.equal(result.substring(0, 4), '$2a$');
        t.end();
    });
});

test("passwords are being validated correctly - correct password", t =>
  hashPassword("pa$$w0rd", (err, hashedPw) => {
    t.equal(err, null, "error should be null");

    comparePasswords("pa$$w0rd", hashedPw, (err, correct) => {
      t.equal(err, null, "error should be null");
      t.equal(correct, true);
      t.end();
    });
  }));

test("passwords are being validated correctly - incorrect password", t =>
  hashPassword("pa$$w0rd", (err, hashedPw) => {
    t.equal(err, null, "error should be null");

    comparePasswords("WRONG", hashedPw, (err, correct) => {
      t.equal(err, null, "error should be null");
      t.equal(correct, false);
      t.end();
    });
  }));