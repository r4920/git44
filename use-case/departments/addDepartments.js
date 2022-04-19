
/**
 *addDepartments.js
 */

const  departmentsEntity = require('../../entities/departments');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : create new record of departments in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addDepartments = ({
  departmentsDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdDepartments  = departmentsEntity(dataToCreate);
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(departmentsDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'code', 'email' ],createdDepartments,'INSERT');
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  createdDepartments = await departmentsDb.createOne(createdDepartments );
  return response.success({ data:createdDepartments });
};
module.exports = addDepartments;