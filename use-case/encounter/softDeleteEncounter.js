/**
 *softDeleteEncounter.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Encounter. {status, message, data}
 */
const softDeleteEncounter = ({ encounterDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedEncounter = await encounterDb.update(query, dataToUpdate);
  if (!updatedEncounter || updatedEncounter.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedEncounter[0] });
};
module.exports = softDeleteEncounter;
