/**
 *updateMedication.js
 */

const  medicationEntity = require('../../entities/medication');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Medication. {status, message, data}
 */
const updateMedication = ({
  medicationDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedMedication = medicationEntity(dataToUpdate);
  updatedMedication = await medicationDb.update(query,updatedMedication);
  if (!updatedMedication || updatedMedication.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedMedication[0] });
};
module.exports = updateMedication;