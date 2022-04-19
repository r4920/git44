/**
 *updateEvent.js
 */

const  EventEntity = require('../../entities/Event');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Event. {status, message, data}
 */
const updateEvent = ({
  EventDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedEvent = EventEntity(dataToUpdate);
  updatedEvent = await EventDb.update(query,updatedEvent);
  if (!updatedEvent || updatedEvent.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedEvent[0] });
};
module.exports = updateEvent;