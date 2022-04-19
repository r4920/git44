
/**
 *deleteOrder.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Order. {status, message, data}
 */
const deleteOrder = ({ orderDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedOrder = await orderDb.destroy(query);
  if (!deletedOrder || deletedOrder.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedOrder[0] });
};

module.exports = deleteOrder;
