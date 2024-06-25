import Joi from 'joi';

export const addScoreBusinessSchema = Joi.object({
  businessId: Joi.string().required(),
  clientId: Joi.string().required(),
  points: Joi.number().greater(0).required(),
});
