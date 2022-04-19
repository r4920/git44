/**
 *updateTask.js
 */

const  TaskEntity = require('../../entities/Task');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Task. {status, message, data}
 */
const updateTask = ({
  TaskDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedTask = TaskEntity(dataToUpdate);
  updatedTask = await TaskDb.update(query,updatedTask);
  if (!updatedTask || updatedTask.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTask[0] });
};
module.exports = updateTask;