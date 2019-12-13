const tape = require("tape");
const getData = require("../src/queries/get-data");
const postData = require("../src/queries/post-data");
const runDbBuild = require("../src/database/db_build");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("getData", t => {
  runDbBuild(function(err, result) {
    t.error(err, "No Error"); //Assert that db_build finished successfully with no errors

    let expected = [ { fruit_name: 'Apple', fruit_stock: 100, fruit_price: '1.29' }, 
    { fruit_name: 'Watermelon', fruit_stock: 100, fruit_price: '3.50' }, 
    { fruit_name: 'Mango', fruit_stock: 100, fruit_price: '1.29' }, 
    { fruit_name: 'Banana', fruit_stock: 100, fruit_price: '0.99' }, 
    { fruit_name: 'Clementine', fruit_stock: 100, fruit_price: '1.69' }, 
    { fruit_name: 'Pear', fruit_stock: 100, fruit_price: '1.49' }, 
    { fruit_name: 'Pomelo', fruit_stock: 100, fruit_price: '1.50' }, 
    { fruit_name: 'Kiwi', fruit_stock: 100, fruit_price: '1.99' }, 
    { fruit_name: 'Mangosteen', fruit_stock: 100, fruit_price: '5.99' }, 
    { fruit_name: 'Dragon fruit', fruit_stock: 100, fruit_price: '4.99' }, 
    { fruit_name: 'Tomato', fruit_stock: 100, fruit_price: '0.89' } ]

    getData.getStockData((err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, expected, "Returns expected data");
      t.end();
    });
  });
});

tape("PostData", t => {
  runDbBuild(function(err, res) {
    t.error(err, "No Error");

    postData.postName("%3DGary", "%3Dpassword", (err, result) => {
      if (err) console.log(err);
      getData.getUserData("Gary", (err, res) => {
        if (err) console.log(err);
        t.deepEqual(res[0].password, "password", "Returns expected data");
        t.end();
      });
    });
  });
});