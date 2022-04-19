/**
 *updateMaster.js
 */

const  MasterEntity = require('../../entities/Master');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Master. {status, message, data}
 */
const updateMaster = ({
  MasterDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedMaster = MasterEntity(dataToUpdate);
  updatedMaster = await MasterDb.update(query,updatedMaster);
  if (!updatedMaster || updatedMaster.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedMaster[0] });
};
module.exports = updateMaster;