/**
 *findAllToDo.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found ToDo(s). {status, message, data}
 */
const findAllToDo = ({
  ToDoDb,filterValidation 
}) => async (params,req,res) => {
  let {
    options, query, isCountOnly 
  } = params;
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  if (isCountOnly){
    let count = await ToDoDb.count(query);
    return response.success({ data: { count } });  
  }
  else {
    let foundToDo = await ToDoDb.paginate(query,options);
    if (!foundToDo){
      return response.recordNotFound();
    }
    return response.success({ data:foundToDo });
  }
};
module.exports = findAllToDo;