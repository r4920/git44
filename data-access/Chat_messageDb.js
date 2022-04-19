let Chat_message = require('../db/sequelize/models').Chat_message;
let {
  create,
  createOne,
  createMany,
  update,
  destroy,
  findOne,
  paginate,
  findAll,
  count,
  upsert,
} = require('../db/sequelize/dbService')(Chat_message);

module.exports = {
  createOne,
  createMany,
  update,
  destroy,
  findOne,
  paginate,
  findAll,
  count,
  upsert,  
};