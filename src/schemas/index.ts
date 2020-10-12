const Joi = require('joi');

const schema = Joi.object({
    id: Joi.string()
    .required(),

    name: Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),

    description: Joi.string()
    .min(3)
    .max(50)
    .required(),

    material: Joi.array(),
    
    bibliography: Joi.array(),
})

const schemaUpdate = Joi.object({
    id: Joi.string()
    .required(),

    name: Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),

    description: Joi.string()
    .min(3)
    .max(50)
    .required(),

 
    material: Joi.array(),
    
    bibliography: Joi.array(),
})

module.exports = {
  schema, schemaUpdate
}
