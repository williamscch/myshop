const express = require('express');
const { checkApiKey } = require('../middlewares/auth.handler');
const CustomerService = require('../services/customers.service');
const validationHandler = require('../middlewares/validator.handler');
// const { createUserSchema } = require('../schemas/customer.schema');
const {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema
} = require('../schemas/customer.schema');

const router = express.Router();
const service = new CustomerService();

router.get('/', checkApiKey, async (req, res, next) => {
  try {
    res.json(await service.find());
  }
  catch (error) {
    next(error);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    res.json(await service.findOneUser(userId));
  }
  catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validationHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      res.status(201).json(await service.create(body));
    }
    catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validationHandler(getCustomerSchema, 'params'),
  validationHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      res.status(201).json(await service.update(id, body));
    }
    catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    }
    catch (error) {
      next(error);
    }
  }
);

module.exports = router;
