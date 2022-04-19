const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  title: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  attachments: joi.string().allow(null).allow(''),
  status: joi.number().integer().allow(0),
  date: joi.date().options({ convert: true }).allow(null).allow(''),
  dueDate: joi.date().options({ convert: true }).allow(null).allow(''),
  completedBy: joi.number().integer().allow(0),
  completedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  title: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  attachments: joi.string().allow(null).allow(''),
  status: joi.number().integer().allow(0),
  date: joi.date().options({ convert: true }).allow(null).allow(''),
  dueDate: joi.date().options({ convert: true }).allow(null).allow(''),
  completedBy: joi.number().integer().allow(0),
  completedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    title: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    description: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    attachments: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    status: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    date: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
    dueDate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
    completedBy: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    completedAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
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