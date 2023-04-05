const boom = require("@hapi/boom");

const { config } = require("../config/config");

function checkApiKey(req, res, next) {
  const apiKey = req.headers["api"];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkAdminRole(req, res, next) {
  console.log(req.user)
  const user = req.user;
  if (user.role === "admin") {
    next();
  } else {
    next(boom.unauthorized("Only admins can manage categories"));
  }
}

module.exports = { checkApiKey, checkAdminRole };
