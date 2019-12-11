// handlers.js

const fs = require("fs");
const path = require("path");
const getData = require("../queries/get-data");
const postData = require("../queries/post-data");
const querystring = require("querystring");

const handleHome = (req, res, endpoint) => {
  const filePath = path.join(__dirname, "..", "..", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { "Content-type": "text/html" });
      res.end("<h1> We've had a problem</h1>");
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(file);
    }
  });
}

const handlePublic = (req, res, endpoint) => {
  const extension = endpoint.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    png: "image/png",
    jpg: "image/jpg",
    ico: "image/x-icon"
  };

  const filePath = path.join(__dirname, "..", "..", endpoint);

  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { "Content-type": "text/html" });
      res.end("<h1> Sorry, there is an error on our end </h1>");
    } else {
      res.writeHead(200, { "Content-type": extensionType[extension] });
      res.end(file);
    }
  });
}

function postHandler(req, res) {
  postData.postName(req.url, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const kittyAmount = JSON.stringify(result);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(kittyAmount);
    }
  });
};

function handle404(req, res) {

  const filePath = path.join(__dirname, "..", "..", "public", "html", "404.html");

  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { "Content-type": "text/html" });
      res.end("<h1> Sorry, there's a server errror </h1>");
    } else {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end(file);
    }
  });
}



const getHandler = (req, res) => {
  getData.getStockData((err, data) => {
    if (err) {
      console.log(err);
    } else {
      const stockArray = JSON.stringify(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(stockArray);
    }
  });
}


module.exports = {
  handleHome,
  handlePublic,
  postHandler,
  getHandler,
  handle404
};
