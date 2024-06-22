import Joi from 'joi';

export const addRewardSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  cost: Joi.number().required(),
});
