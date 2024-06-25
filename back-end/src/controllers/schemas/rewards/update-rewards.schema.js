import Joi from 'joi';

export const updateRewardSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  cost: Joi.number().min(1).required(),
});
