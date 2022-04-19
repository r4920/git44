
/**
 *addMaster.js
 */

const  MasterEntity = require('../../entities/Master');
const response = require('../../utils/response');

/**
 * @description : create new record of Master in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addMaster = ({
  MasterDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdMaster  = MasterEntity(dataToCreate);
  createdMaster = await MasterDb.createOne(createdMaster );
  return response.success({ data:createdMaster });
};
module.exports = addMaster;