const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  slot: joi.number().integer().allow(0),
  startTime: joi.date().options({ convert: true }).allow(null).allow(''),
  endTime: joi.date().options({ convert: true }).allow(null).allow(''),
  date: joi.date().options({ convert: true }).allow(null).allow(''),
  offset: joi.number().integer().allow(0),
  participant: joi.string().allow(null).allow(''),
  host: joi.number().integer().allow(0),
  isCancelled: joi.boolean(),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  slot: joi.number().integer().allow(0),
  startTime: joi.date().options({ convert: true }).allow(null).allow(''),
  endTime: joi.date().options({ convert: true }).allow(null).allow(''),
  date: joi.date().options({ convert: true }).allow(null).allow(''),
  offset: joi.number().integer().allow(0),
  participant: joi.string().allow(null).allow(''),
  host: joi.number().integer().allow(0),
  isCancelled: joi.boolean(),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    slot: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    startTime: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
    endTime: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
    date: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
    offset: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    participant: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    host: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    isCancelled: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
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