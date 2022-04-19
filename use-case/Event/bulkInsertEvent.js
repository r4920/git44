
/**
 *bulkInsertEvent.js
 */

const  EventEntity = require('../../entities/Event');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Events. {status, message, data}
 */
const bulkInsertEvent = ({
  EventDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let eventEntities = dataToCreate.map(item => EventEntity(item));
  let createdEvent = await EventDb.createMany(eventEntities);
  return response.success({ data:{ count: createdEvent.length } });
};
module.exports = bulkInsertEvent;