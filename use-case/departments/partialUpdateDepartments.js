/**
 *partialUpdateDepartments.js
 */

const  departmentsEntity = require('../../entities/departments');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Departments. {status, message, data}
 */
const partialUpdateDepartments = ({ departmentsDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(DepartmentsDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'code', 'email' ],dataToUpdate,'UPDATE',query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  const updatedDepartments = await departmentsDb.update(query,dataToUpdate);
  if (!updatedDepartments || updatedDepartments.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedDepartments[0] });
};
module.exports = partialUpdateDepartments;