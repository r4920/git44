/**
 *softDeleteDepartments.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Departments. {status, message, data}
 */
const softDeleteDepartments = ({ departmentsDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedDepartments = await departmentsDb.update(query, dataToUpdate);
  if (!updatedDepartments || updatedDepartments.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedDepartments[0] });
};
module.exports = softDeleteDepartments;
