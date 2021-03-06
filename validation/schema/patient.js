const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  name: joi.string().allow(null).allow(''),
  code: joi.string().case('lower').allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  isActive: joi.boolean().default(true),
  isDeleted: joi.boolean().default(false)
}).unknown(true);

const updateSchema = joi.object({
  name: joi.string().allow(null).allow(''),
  code: joi.string().case('lower').allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  isActive: joi.boolean().default(true),
  isDeleted: joi.boolean().default(false),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    id: joi.any()
  }).unknown(true),])),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
}).unknown(true);

module.exports = {
  createSchema,
  updateSchema,
  filterValidationSchema
};