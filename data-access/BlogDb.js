let Blog = require('../db/sequelize/models').Blog;
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
} = require('../db/sequelize/dbService')(Blog);

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