const boom = require('@hapi/boom');

const { config } = require('../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers.api;
  if (apiKey === config.apiKey) {
    next();
  }
  else {
    next(boom.unauthorized('You need an API_KEY to access this endpoint'));
  }
}

function checkAdminRole(req, res, next) {
  const { user } = req;
  if (user.role === 'admin') {
    next();
  }
  else {
    next(boom.unauthorized('Only admins are allowed to use this endpoint'));
  }
}

module.exports = { checkApiKey, checkAdminRole };
