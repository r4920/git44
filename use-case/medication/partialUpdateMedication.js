/**
 *partialUpdateMedication.js
 */

const  medicationEntity = require('../../entities/medication');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Medication. {status, message, data}
 */
const partialUpdateMedication = ({ medicationDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedMedication = await medicationDb.update(query,dataToUpdate);
  if (!updatedMedication || updatedMedication.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedMedication[0] });
};
module.exports = partialUpdateMedication;