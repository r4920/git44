/**
 *partialUpdateEncounter.js
 */

const  encounterEntity = require('../../entities/encounter');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Encounter. {status, message, data}
 */
const partialUpdateEncounter = ({ encounterDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedEncounter = await encounterDb.update(query,dataToUpdate);
  if (!updatedEncounter || updatedEncounter.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedEncounter[0] });
};
module.exports = partialUpdateEncounter;