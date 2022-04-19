/**
 *partialUpdateMaster.js
 */

const  MasterEntity = require('../../entities/Master');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Master. {status, message, data}
 */
const partialUpdateMaster = ({ MasterDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedMaster = await MasterDb.update(query,dataToUpdate);
  if (!updatedMaster || updatedMaster.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedMaster[0] });
};
module.exports = partialUpdateMaster;