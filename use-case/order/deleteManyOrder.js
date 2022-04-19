/**
 *deleteManyOrder.js
 */

const response = require('../../utils/response');

/**
 * @description : delete documents from table by using ids.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyOrder = ({ orderDb }) => async (params, req, res) => {
  let deletedOrder = (await orderDb.destroy(params)).length;
  return response.success({ data: { count:deletedOrder } });
};
module.exports = deleteManyOrder;
