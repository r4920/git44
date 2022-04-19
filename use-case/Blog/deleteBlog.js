
/**
 *deleteBlog.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Blog. {status, message, data}
 */
const deleteBlog = ({ BlogDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedBlog = await BlogDb.destroy(query);
  if (!deletedBlog || deletedBlog.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedBlog[0] });
};

module.exports = deleteBlog;
