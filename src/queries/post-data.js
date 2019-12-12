// post-data.js

const dbConnection = require("../database/db_connection");

const postName = (username, password, cb) => {
    const nameSplit = username.split('%3D')[1];
    const userPassword = password.split('%3D')[1];
    dbConnection.query(
        `INSERT INTO users (username, password) VALUES ($1, $2)
        RETURNING kitty`,
        [nameSplit, userPassword],
        (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            cb(null, res.rows[0].kitty)
        }
    );
  };

  module.exports = {
    postName
  };
  