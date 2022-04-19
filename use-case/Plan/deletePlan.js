
/**
 *deletePlan.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Plan. {status, message, data}
 */
const deletePlan = ({ PlanDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedPlan = await PlanDb.destroy(query);
  if (!deletedPlan || deletedPlan.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedPlan[0] });
};

module.exports = deletePlan;
