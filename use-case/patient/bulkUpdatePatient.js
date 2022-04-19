/**
 *bulkUpdatePatient.js
 */

const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : update multiple records of patient with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdatePatient = ({ patientDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(patientDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'code' ],dataToUpdate,'BULK_UPDATE',query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  const updatedPatient = (await patientDb.update(query,dataToUpdate)).length;
  return response.success({ data:{ count: updatedPatient } });
};
module.exports = bulkUpdatePatient;