import Joi from "joi";

const registerValidation = Joi.object({
  email: Joi.string().max(255).email().required(),
  name: Joi.string().max(255).required(),
  password: Joi.string().max(255).required(),
  avatar: Joi.string().optional(),
  phone: Joi.string().optional(),
  adress: Joi.string().max(255).optional(),
});

const loginValidation = Joi.object({
  email: Joi.string().max(255).email().required(),
  password: Joi.string().max(255).required(),
});

const updateUserValidation = Joi.object({
  email: Joi.string().max(225).optional(),
  name: Joi.string().max(225).optional(),
  phone: Joi.string().optional(),
  adress: Joi.string().max(225).optional(),
});

export {registerValidation, loginValidation, updateUserValidation};