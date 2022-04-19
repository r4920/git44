let Event = require('../db/sequelize/models').Event;
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
} = require('../db/sequelize/dbService')(Event);

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