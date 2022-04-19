/**
 *softDeleteTask.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Task. {status, message, data}
 */
const softDeleteTask = ({ TaskDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedTask = await TaskDb.update(query, dataToUpdate);
  if (!updatedTask || updatedTask.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTask[0] });
};
module.exports = softDeleteTask;
