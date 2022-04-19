/**
 *partialUpdateEnterprise.js
 */

const  enterpriseEntity = require('../../entities/enterprise');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Enterprise. {status, message, data}
 */
const partialUpdateEnterprise = ({ enterpriseDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(EnterpriseDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'name', 'email', 'code' ],dataToUpdate,'UPDATE',query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  const updatedEnterprise = await enterpriseDb.update(query,dataToUpdate);
  if (!updatedEnterprise || updatedEnterprise.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedEnterprise[0] });
};
module.exports = partialUpdateEnterprise;