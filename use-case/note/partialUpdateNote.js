/**
 *partialUpdateNote.js
 */

const  noteEntity = require('../../entities/note');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Note. {status, message, data}
 */
const partialUpdateNote = ({ noteDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedNote = await noteDb.update(query,dataToUpdate);
  if (!updatedNote || updatedNote.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedNote[0] });
};
module.exports = partialUpdateNote;