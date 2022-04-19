
/**
 *deletePatient.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Patient. {status, message, data}
 */
const deletePatient = ({ patientDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedPatient = await patientDb.destroy(query);
  if (!deletedPatient || deletedPatient.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedPatient[0] });
};

module.exports = deletePatient;
