const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  name: joi.string().required().case('lower'),
  email: joi.string().required().case('lower'),
  phone: joi.string().allow(null).allow(''),
  code: joi.string().required().case('lower'),
  address: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  website: joi.string().allow(null).allow(''),
  isActive: joi.boolean().default(true),
  isDeleted: joi.boolean().default(false)
}).unknown(true);

const updateSchema = joi.object({
  name: joi.string().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }).case('lower'),
  email: joi.string().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }).case('lower'),
  phone: joi.string().allow(null).allow(''),
  code: joi.string().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }).case('lower'),
  address: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  website: joi.string().allow(null).allow(''),
  isActive: joi.boolean().default(true),
  isDeleted: joi.boolean().default(false),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    phone: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    address: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    description: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    website: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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