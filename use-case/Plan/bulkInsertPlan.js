
/**
 *bulkInsertPlan.js
 */

const  PlanEntity = require('../../entities/Plan');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Plans. {status, message, data}
 */
const bulkInsertPlan = ({
  PlanDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let planEntities = dataToCreate.map(item => PlanEntity(item));
  let createdPlan = await PlanDb.createMany(planEntities);
  return response.success({ data:{ count: createdPlan.length } });
};
module.exports = bulkInsertPlan;