const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { addUserSchema } = require('../schemas/user.schema');
const validationHandler = require('../middlewares/validator.handler');

const router = express.Router();

const { config } = require('../config/config');

router.post(
  '/login',
  validationHandler(addUserSchema, 'body'),
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
