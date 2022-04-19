const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  code: joi.string().allow(null).allow(''),
  name: joi.string().allow(null).allow(''),
  strength: joi.string().allow(null).allow(''),
  unit: joi.string().allow(null).allow(''),
  medForm: joi.string().allow(null).allow(''),
  mfgName: joi.string().allow(null).allow(''),
  isActive: joi.boolean().default(true),
  isDeleted: joi.boolean().default(false)
}).unknown(true);

const updateSchema = joi.object({
  code: joi.string().allow(null).allow(''),
  name: joi.string().allow(null).allow(''),
  strength: joi.string().allow(null).allow(''),
  unit: joi.string().allow(null).allow(''),
  medForm: joi.string().allow(null).allow(''),
  mfgName: joi.string().allow(null).allow(''),
  isActive: joi.boolean().default(true),
  isDeleted: joi.boolean().default(false),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    strength: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    unit: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    medForm: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    mfgName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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