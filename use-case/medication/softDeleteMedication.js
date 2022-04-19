/**
 *softDeleteMedication.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Medication. {status, message, data}
 */
const softDeleteMedication = ({ medicationDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedMedication = await medicationDb.update(query, dataToUpdate);
  if (!updatedMedication || updatedMedication.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedMedication[0] });
};
module.exports = softDeleteMedication;
