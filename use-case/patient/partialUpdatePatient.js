/**
 *partialUpdatePatient.js
 */

const  patientEntity = require('../../entities/patient');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Patient. {status, message, data}
 */
const partialUpdatePatient = ({ patientDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(PatientDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'code' ],dataToUpdate,'UPDATE',query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  const updatedPatient = await patientDb.update(query,dataToUpdate);
  if (!updatedPatient || updatedPatient.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedPatient[0] });
};
module.exports = partialUpdatePatient;