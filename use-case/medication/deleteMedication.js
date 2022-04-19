
/**
 *deleteMedication.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Medication. {status, message, data}
 */
const deleteMedication = ({ medicationDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedMedication = await medicationDb.destroy(query);
  if (!deletedMedication || deletedMedication.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedMedication[0] });
};

module.exports = deleteMedication;
