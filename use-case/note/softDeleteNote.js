/**
 *softDeleteNote.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Note. {status, message, data}
 */
const softDeleteNote = ({ noteDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedNote = await noteDb.update(query, dataToUpdate);
  if (!updatedNote || updatedNote.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedNote[0] });
};
module.exports = softDeleteNote;
