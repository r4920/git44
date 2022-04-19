
/**
 *bulkInsertToDo.js
 */

const  ToDoEntity = require('../../entities/ToDo');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created ToDos. {status, message, data}
 */
const bulkInsertToDo = ({
  ToDoDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let todoEntities = dataToCreate.map(item => ToDoEntity(item));
  let createdToDo = await ToDoDb.createMany(todoEntities);
  return response.success({ data:{ count: createdToDo.length } });
};
module.exports = bulkInsertToDo;