const http = require('http');
// const https = require('https');  - do we need the ternary?
const router = require('./routers.js');

const server = http.createServer(router);

const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log("Server is up and running on port 3001!");
});
// server.js