// handlers.js

const fs = require("fs");
const path = require("path");
const getData = require("../queries/get-data");
const postData = require("../queries/post-data");
const querystring = require("querystring");
const cookies = require("../queries/cookies")

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

const handleShop = (req, res) => {
  // if user is authorised (write separate function to check cookie token), then show shop page
  // otherwise show not-authorised page
  if (cookies.verifyToken()) {
    const filePath = path.join(__dirname, "..", "..", "public", "html", "shop.html");
    fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { "Content-type": "text/html" });
      res.end("<h1> We've had a problem</h1>");
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(file);
    }
    });
  } else {
    res.writeHead(401, { "Content-type": "text/html" });
    res.end("<h1>You're not allowed into the shop!</h1>");
  }
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

const getUserData = (req, res) => {
  getData.getUserData((err, data) => {
    if (err) {
      console.log(err);
    } else {
      // const userArray = JSON.stringify(data);
      res.writeHead(302, { 
        "Content-Type": "text/html",
        "Set-Cookie": `logged_in=${tokenRes}; Max-Age=9999`,
        "Location": "/shop"
      });
      res.end();
    }
  });
}


module.exports = {
  handleHome,
  handlePublic,
  handleShop,
  postHandler,
  getHandler,
  getUserData,
  handle404
};
