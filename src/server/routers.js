const {
  handleHome,
  handlePublic,
  handleShop,
  postHandler,
  getHandler,
  getUserData,
  handle404
} = require("./handlers");


const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    handleHome(request, response);
  } else if (endpoint === "/shop/getstock") {
    getHandler(request, response);
  } else if (endpoint === "/shop") {
    handleShop(request, response);
  } else if (endpoint.includes("public")) {
    handlePublic(request, response, endpoint);
  } else if (endpoint.includes("submitname")) {
    postHandler(request, response);
  } else if (endpoint.includes("/getUser")) {
    getUserData(request, response);
  } else {
    handle404(request, response);
  } 
};

module.exports = router;
// routers.js
