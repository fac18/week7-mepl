// post-data.js

const dbConnection = require("../database/db_connection");

const postName = (name, cb) => {
    let nameSplit = name.split('%3D')[1];
    dbConnection.query(
        `INSERT INTO users (name) VALUES ($1)
        RETURNING kitty`,
        [nameSplit],
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
  