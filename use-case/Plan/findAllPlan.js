/**
 *findAllPlan.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Plan(s). {status, message, data}
 */
const findAllPlan = ({
  PlanDb,filterValidation 
}) => async (params,req,res) => {
  let {
    options, query, isCountOnly 
  } = params;
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  if (isCountOnly){
    let count = await PlanDb.count(query);
    return response.success({ data: { count } });  
  }
  else {
    let foundPlan = await PlanDb.paginate(query,options);
    if (!foundPlan){
      return response.recordNotFound();
    }
    return response.success({ data:foundPlan });
  }
};
module.exports = findAllPlan;