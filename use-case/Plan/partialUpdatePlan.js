/**
 *partialUpdatePlan.js
 */

const  PlanEntity = require('../../entities/Plan');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Plan. {status, message, data}
 */
const partialUpdatePlan = ({ PlanDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedPlan = await PlanDb.update(query,dataToUpdate);
  if (!updatedPlan || updatedPlan.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedPlan[0] });
};
module.exports = partialUpdatePlan;