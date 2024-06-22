import Joi from 'joi';

export const getBusinessByIdSchema = Joi.object({
  id: Joi.number().required(),
});
