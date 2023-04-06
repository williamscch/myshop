const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router();

const { config } = require('../config/config');

const { createCustomerSchema } = require('../schemas/customer.schema');

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const { user } = req;
      const payload = {
        sub: user.id,
        role: user.role
      };

      const token = jwt.sign(payload, config.jwtSecret);

      res.json({
        user,
        token
      });
    }
    catch (error) {
      next(error);
    }
  }
);

router.post(
  '/singup',
  validatorHandler(createCustomerSchema, 'body'),
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const { user } = req;
      const payload = {
        sub: user.id,
        role: user.role
      };

      const token = jwt.sign(payload, config.jwtSecret);

      res.json({
        user,
        token
      });
    }
    catch (error) {
      next(error);
    }
  }
);

module.exports = router;
