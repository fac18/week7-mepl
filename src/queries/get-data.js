// get-data.js

const databaseConnection = require("../database/db_connection");

const getStockData = cb => {
  databaseConnection.query(
    "SELECT fruit_name, fruit_stock, fruit_price FROM shop ORDER BY fruit_id",
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      cb(null, res.rows);
    }
  );
};
 
const getUsers = cb => {
  databaseConnection.query(
    "SELECT name, password FROM users ORDER BY id",
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      cb(null, res.rows);
    }
  );
};

module.exports = {
  getStockData,
  getUsers
};


// PSEUDO CODE EXPLANATION example of what's happening in pg.pool.query
// function query(sql, callback) {
//   const result = run(sql);
//   callback(result.error, result.success);
// }