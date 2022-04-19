
/**
 *deleteChat_message.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Chat_message. {status, message, data}
 */
const deleteChat_message = ({ Chat_messageDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedChat_message = await Chat_messageDb.destroy(query);
  if (!deletedChat_message || deletedChat_message.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedChat_message[0] });
};

module.exports = deleteChat_message;
