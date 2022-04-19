
/**
 *addNote.js
 */

const  noteEntity = require('../../entities/note');
const response = require('../../utils/response');

/**
 * @description : create new record of note in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addNote = ({
  noteDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdNote  = noteEntity(dataToCreate);
  createdNote = await noteDb.createOne(createdNote );
  return response.success({ data:createdNote });
};
module.exports = addNote;