const bcrypt = require('bcryptjs');


const hashPassword = (username, password, callback) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        callback(err)
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            return err;
          }
          console.log(hash);
          return hash;
          // hash = 
          // $2a$12$Lon35sDJfxro.TUWwH5GiOibbfx58FayNHkazI6ll5BdoklVkjwRG
        });
      }
    });
  };

  // let password = "pass";
  // let hashedPassword = "pass"
  // const comparePasswords = bcrypt.compare(password, hashedPassword);

  // const comparePasswords = (password, hashedPassword, callback) => {
  //   bcrypt.compare(password, hashedPassword, callback);
  // };
  
  module.exports = {
    // comparePasswords,
    hashPassword
  }