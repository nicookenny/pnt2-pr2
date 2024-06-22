import Joi from 'joi';

export const createClientSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
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
