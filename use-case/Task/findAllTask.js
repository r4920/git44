/**
 *findAllTask.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Task(s). {status, message, data}
 */
const findAllTask = ({
  TaskDb,filterValidation 
}) => async (params,req,res) => {
  let {
    options, query, isCountOnly 
  } = params;
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  if (isCountOnly){
    let count = await TaskDb.count(query);
    return response.success({ data: { count } });  
  }
  else {
    let foundTask = await TaskDb.paginate(query,options);
    if (!foundTask){
      return response.recordNotFound();
    }
    return response.success({ data:foundTask });
  }
};
module.exports = findAllTask;