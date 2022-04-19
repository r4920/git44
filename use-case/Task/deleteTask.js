
/**
 *deleteTask.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Task. {status, message, data}
 */
const deleteTask = ({ TaskDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedTask = await TaskDb.destroy(query);
  if (!deletedTask || deletedTask.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedTask[0] });
};

module.exports = deleteTask;
