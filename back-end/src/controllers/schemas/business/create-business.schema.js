import Joi from 'joi';

export const createBusinessSchema = Joi.object({
  identifier: Joi.number().required(), // CUIT

  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  address: Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    street: Joi.string().required(),
    number: Joi.number().required(),
    locality: Joi.string().required(),
    neighborhood: Joi.string(),
    country: Joi.string().required(),
    raw: Joi.string().required(),
  }).required(),
});
