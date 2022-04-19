
/**
 *deleteNote.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Note. {status, message, data}
 */
const deleteNote = ({ noteDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedNote = await noteDb.destroy(query);
  if (!deletedNote || deletedNote.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedNote[0] });
};

module.exports = deleteNote;
