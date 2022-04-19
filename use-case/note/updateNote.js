/**
 *updateNote.js
 */

const  noteEntity = require('../../entities/note');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Note. {status, message, data}
 */
const updateNote = ({
  noteDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedNote = noteEntity(dataToUpdate);
  updatedNote = await noteDb.update(query,updatedNote);
  if (!updatedNote || updatedNote.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedNote[0] });
};
module.exports = updateNote;