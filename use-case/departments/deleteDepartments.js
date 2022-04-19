
/**
 *deleteDepartments.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Departments. {status, message, data}
 */
const deleteDepartments = ({ departmentsDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedDepartments = await departmentsDb.destroy(query);
  if (!deletedDepartments || deletedDepartments.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedDepartments[0] });
};

module.exports = deleteDepartments;
