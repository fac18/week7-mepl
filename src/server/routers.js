const {
  handleHome,
  handlePublic,
  postHandler,
  getHandler,
  handle404
} = require("./handlers");

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    handleHome(request, response);
  } else if (endpoint.includes("public")) {
    handlePublic(request, response, endpoint);
  } else if (endpoint === "/getstock") {
    getHandler(request, response);
  } else if (endpoint.includes("submitname")) {
    postHandler(request, response);
  } else {
    handle404(request, response);
  }
};

module.exports = router;
// routers.js
