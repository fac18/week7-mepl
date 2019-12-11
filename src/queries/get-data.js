// get-data.js

const databaseConnection = require("../database/db_connection");

const getStockData = cb => {
  databaseConnection.query(
    "SELECT fruit, stock, price FROM shop ORDER BY id",
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
  getStockData
};


// PSEUDO CODE EXPLANATION example of what's happening in pg.pool.query
// function query(sql, callback) {
//   const result = run(sql);
//   callback(result.error, result.success);
// }