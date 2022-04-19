/**
 *updatePlan.js
 */

const  PlanEntity = require('../../entities/Plan');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Plan. {status, message, data}
 */
const updatePlan = ({
  PlanDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedPlan = PlanEntity(dataToUpdate);
  updatedPlan = await PlanDb.update(query,updatedPlan);
  if (!updatedPlan || updatedPlan.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedPlan[0] });
};
module.exports = updatePlan;