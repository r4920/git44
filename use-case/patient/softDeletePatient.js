/**
 *softDeletePatient.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Patient. {status, message, data}
 */
const softDeletePatient = ({ patientDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedPatient = await patientDb.update(query, dataToUpdate);
  if (!updatedPatient || updatedPatient.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedPatient[0] });
};
module.exports = softDeletePatient;
