const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  comment: joi.string().allow(null).allow(''),
  upvoteCount: joi.number().integer().allow(0),
  downVoteCount: joi.number().integer().allow(0),
  commentTime: joi.date().options({ convert: true }).allow(null).allow(''),
  parentItem: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  comment: joi.string().allow(null).allow(''),
  upvoteCount: joi.number().integer().allow(0),
  downVoteCount: joi.number().integer().allow(0),
  commentTime: joi.date().options({ convert: true }).allow(null).allow(''),
  parentItem: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    comment: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    upvoteCount: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    downVoteCount: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    commentTime: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
    parentItem: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
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