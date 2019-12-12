const tape = require('tape');

const {hashPassword, comparePasswords} = require('../src/queries/encrypt');

test('If the password is being hashed correctly', t => {
    hashPassword('holla', (err, result) => {
        t.equal()
    })
})