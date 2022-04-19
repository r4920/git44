
/**
 *deleteToDo.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted ToDo. {status, message, data}
 */
const deleteToDo = ({ ToDoDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedToDo = await ToDoDb.destroy(query);
  if (!deletedToDo || deletedToDo.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedToDo[0] });
};

module.exports = deleteToDo;
