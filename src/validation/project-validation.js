import Joi from "joi";

const createValidation = Joi.object({
  name: Joi.string().max(255).required(),
  description: Joi.string().max(255).required(),
});

export{createValidation}