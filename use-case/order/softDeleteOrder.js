/**
 *softDeleteOrder.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Order. {status, message, data}
 */
const softDeleteOrder = ({ orderDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedOrder = await orderDb.update(query, dataToUpdate);
  if (!updatedOrder || updatedOrder.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedOrder[0] });
};
module.exports = softDeleteOrder;
