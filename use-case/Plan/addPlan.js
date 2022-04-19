
/**
 *addPlan.js
 */

const  PlanEntity = require('../../entities/Plan');
const response = require('../../utils/response');

/**
 * @description : create new record of Plan in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addPlan = ({
  PlanDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdPlan  = PlanEntity(dataToCreate);
  createdPlan = await PlanDb.createOne(createdPlan );
  return response.success({ data:createdPlan });
};
module.exports = addPlan;