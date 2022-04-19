/**
 *softDeletePlan.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Plan. {status, message, data}
 */
const softDeletePlan = ({ PlanDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedPlan = await PlanDb.update(query, dataToUpdate);
  if (!updatedPlan || updatedPlan.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedPlan[0] });
};
module.exports = softDeletePlan;
