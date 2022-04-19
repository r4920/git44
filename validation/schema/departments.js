const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  name: joi.string().required().case('lower'),
  code: joi.string().required().case('lower'),
  enterprises: joi.number().integer().allow(0),
  email: joi.string().case('lower').allow(null).allow(''),
  phone: joi.string().allow(null).allow(''),
  website: joi.string().allow(null).allow(''),
  address: joi.string().allow(null).allow(''),
  isActive: joi.boolean().default(true),
  isDeleted: joi.boolean().default(false)
}).unknown(true);

const updateSchema = joi.object({
  name: joi.string().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }).case('lower'),
  code: joi.string().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }).case('lower'),
  enterprises: joi.number().integer().allow(0),
  email: joi.string().case('lower').allow(null).allow(''),
  phone: joi.string().allow(null).allow(''),
  website: joi.string().allow(null).allow(''),
  address: joi.string().allow(null).allow(''),
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
    enterprises: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    phone: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    website: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    address: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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