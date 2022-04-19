/**
 *deleteManyEvent.js
 */

const response = require('../../utils/response');

/**
 * @description : delete documents from table by using ids.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyEvent = ({ EventDb }) => async (params, req, res) => {
  let deletedEvent = (await EventDb.destroy(params)).length;
  return response.success({ data: { count:deletedEvent } });
};
module.exports = deleteManyEvent;
