
/**
 *deleteEvent.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Event. {status, message, data}
 */
const deleteEvent = ({ EventDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedEvent = await EventDb.destroy(query);
  if (!deletedEvent || deletedEvent.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedEvent[0] });
};

module.exports = deleteEvent;
