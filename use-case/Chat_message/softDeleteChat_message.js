/**
 *softDeleteChat_message.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Chat_message. {status, message, data}
 */
const softDeleteChat_message = ({ Chat_messageDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedChat_message = await Chat_messageDb.update(query, dataToUpdate);
  if (!updatedChat_message || updatedChat_message.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedChat_message[0] });
};
module.exports = softDeleteChat_message;
