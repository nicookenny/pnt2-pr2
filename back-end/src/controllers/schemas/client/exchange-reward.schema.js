import Joi from 'joi';

export const exchangeRewardSchema = Joi.object({
  clientId: Joi.string().required(),
  businessId: Joi.string().required(),
  amount: Joi.number().min(1).required(),
});
