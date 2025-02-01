import Joi from "joi";

const createValidation = Joi.object({
  title: Joi.string().max(255).required(),
  description: Joi.string().max(255).required(),
  // projectId: Joi.number().optional(),
  // assignedTo: Joi.number().optional(),
});

export{
    createValidation
}