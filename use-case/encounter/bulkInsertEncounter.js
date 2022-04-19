
/**
 *bulkInsertEncounter.js
 */

const  encounterEntity = require('../../entities/encounter');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Encounters. {status, message, data}
 */
const bulkInsertEncounter = ({
  encounterDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let encounterEntities = dataToCreate.map(item => encounterEntity(item));
  let createdEncounter = await encounterDb.createMany(encounterEntities);
  return response.success({ data:{ count: createdEncounter.length } });
};
module.exports = bulkInsertEncounter;