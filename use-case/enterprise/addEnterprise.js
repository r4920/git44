
/**
 *addEnterprise.js
 */

const  enterpriseEntity = require('../../entities/enterprise');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : create new record of enterprise in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addEnterprise = ({
  enterpriseDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdEnterprise  = enterpriseEntity(dataToCreate);
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(enterpriseDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'email', 'code' ],createdEnterprise,'INSERT');
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  createdEnterprise = await enterpriseDb.createOne(createdEnterprise );
  return response.success({ data:createdEnterprise });
};
module.exports = addEnterprise;