/**
 *softDeleteToDo.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated ToDo. {status, message, data}
 */
const softDeleteToDo = ({ ToDoDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedToDo = await ToDoDb.update(query, dataToUpdate);
  if (!updatedToDo || updatedToDo.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedToDo[0] });
};
module.exports = softDeleteToDo;
