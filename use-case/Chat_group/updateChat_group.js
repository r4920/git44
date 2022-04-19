/**
 *updateChat_group.js
 */

const  Chat_groupEntity = require('../../entities/Chat_group');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Chat_group. {status, message, data}
 */
const updateChat_group = ({
  Chat_groupDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedChat_group = Chat_groupEntity(dataToUpdate);
  updatedChat_group = await Chat_groupDb.update(query,updatedChat_group);
  if (!updatedChat_group || updatedChat_group.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedChat_group[0] });
};
module.exports = updateChat_group;