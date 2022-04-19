/**
 *partialUpdateBlog.js
 */

const  BlogEntity = require('../../entities/Blog');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Blog. {status, message, data}
 */
const partialUpdateBlog = ({ BlogDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedBlog = await BlogDb.update(query,dataToUpdate);
  if (!updatedBlog || updatedBlog.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedBlog[0] });
};
module.exports = partialUpdateBlog;