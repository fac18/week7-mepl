const http = require('http');
// const https = require('https');  - do we need the ternary?
const router = require('./routers.js');

const server = http.createServer(router);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log("Server is up and running on port 3000!")
})
// server.js