/**
 *partialUpdateComment.js
 */

const  CommentEntity = require('../../entities/Comment');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Comment. {status, message, data}
 */
const partialUpdateComment = ({ CommentDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedComment = await CommentDb.update(query,dataToUpdate);
  if (!updatedComment || updatedComment.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedComment[0] });
};
module.exports = partialUpdateComment;