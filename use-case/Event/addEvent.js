
/**
 *addEvent.js
 */

const  EventEntity = require('../../entities/Event');
const response = require('../../utils/response');

/**
 * @description : create new record of Event in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addEvent = ({
  EventDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdEvent  = EventEntity(dataToCreate);
  createdEvent = await EventDb.createOne(createdEvent );
  return response.success({ data:createdEvent });
};
module.exports = addEvent;