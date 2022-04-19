/**
 *partialUpdateEvent.js
 */

const  EventEntity = require('../../entities/Event');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Event. {status, message, data}
 */
const partialUpdateEvent = ({ EventDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedEvent = await EventDb.update(query,dataToUpdate);
  if (!updatedEvent || updatedEvent.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedEvent[0] });
};
module.exports = partialUpdateEvent;