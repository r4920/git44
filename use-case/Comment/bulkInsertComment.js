
/**
 *bulkInsertComment.js
 */

const  CommentEntity = require('../../entities/Comment');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Comments. {status, message, data}
 */
const bulkInsertComment = ({
  CommentDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let commentEntities = dataToCreate.map(item => CommentEntity(item));
  let createdComment = await CommentDb.createMany(commentEntities);
  return response.success({ data:{ count: createdComment.length } });
};
module.exports = bulkInsertComment;