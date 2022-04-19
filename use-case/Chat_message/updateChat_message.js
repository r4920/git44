/**
 *updateChat_message.js
 */

const  Chat_messageEntity = require('../../entities/Chat_message');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Chat_message. {status, message, data}
 */
const updateChat_message = ({
  Chat_messageDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedChat_message = Chat_messageEntity(dataToUpdate);
  updatedChat_message = await Chat_messageDb.update(query,updatedChat_message);
  if (!updatedChat_message || updatedChat_message.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedChat_message[0] });
};
module.exports = updateChat_message;