/**
 *partialUpdateChat_message.js
 */

const  Chat_messageEntity = require('../../entities/Chat_message');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Chat_message. {status, message, data}
 */
const partialUpdateChat_message = ({ Chat_messageDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedChat_message = await Chat_messageDb.update(query,dataToUpdate);
  if (!updatedChat_message || updatedChat_message.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedChat_message[0] });
};
module.exports = partialUpdateChat_message;