/**
 *partialUpdateTask.js
 */

const  TaskEntity = require('../../entities/Task');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Task. {status, message, data}
 */
const partialUpdateTask = ({ TaskDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedTask = await TaskDb.update(query,dataToUpdate);
  if (!updatedTask || updatedTask.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTask[0] });
};
module.exports = partialUpdateTask;