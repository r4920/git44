/**
 *softDeleteBlog.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Blog. {status, message, data}
 */
const softDeleteBlog = ({ BlogDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedBlog = await BlogDb.update(query, dataToUpdate);
  if (!updatedBlog || updatedBlog.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedBlog[0] });
};
module.exports = softDeleteBlog;
