/**
 *updateEnterprise.js
 */

const  enterpriseEntity = require('../../entities/enterprise');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Enterprise. {status, message, data}
 */
const updateEnterprise = ({
  enterpriseDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedEnterprise = enterpriseEntity(dataToUpdate);
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(enterpriseDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'email', 'code' ],updatedEnterprise,'UPDATE',query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  updatedEnterprise = await enterpriseDb.update(query,updatedEnterprise);
  if (!updatedEnterprise || updatedEnterprise.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedEnterprise[0] });
};
module.exports = updateEnterprise;