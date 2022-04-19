/**
 *partialUpdateChat_group.js
 */

const  Chat_groupEntity = require('../../entities/Chat_group');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Chat_group. {status, message, data}
 */
const partialUpdateChat_group = ({ Chat_groupDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedChat_group = await Chat_groupDb.update(query,dataToUpdate);
  if (!updatedChat_group || updatedChat_group.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedChat_group[0] });
};
module.exports = partialUpdateChat_group;