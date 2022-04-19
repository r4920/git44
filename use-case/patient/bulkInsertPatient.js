
/**
 *bulkInsertPatient.js
 */

const  patientEntity = require('../../entities/patient');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Patients. {status, message, data}
 */
const bulkInsertPatient = ({
  patientDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let patientEntities = dataToCreate.map(item => patientEntity(item));
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(patientDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'code' ],patientEntities,'BULK_INSERT');
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  let createdPatient = await patientDb.createMany(patientEntities);
  return response.success({ data:{ count: createdPatient.length } });
};
module.exports = bulkInsertPatient;