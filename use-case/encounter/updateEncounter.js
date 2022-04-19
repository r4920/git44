/**
 *updateEncounter.js
 */

const  encounterEntity = require('../../entities/encounter');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Encounter. {status, message, data}
 */
const updateEncounter = ({
  encounterDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedEncounter = encounterEntity(dataToUpdate);
  updatedEncounter = await encounterDb.update(query,updatedEncounter);
  if (!updatedEncounter || updatedEncounter.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedEncounter[0] });
};
module.exports = updateEncounter;