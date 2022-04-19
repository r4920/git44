
/**
 *deleteEncounter.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Encounter. {status, message, data}
 */
const deleteEncounter = ({ encounterDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedEncounter = await encounterDb.destroy(query);
  if (!deletedEncounter || deletedEncounter.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedEncounter[0] });
};

module.exports = deleteEncounter;
