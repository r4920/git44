/**
 *softDeleteMaster.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Master. {status, message, data}
 */
const softDeleteMaster = ({ MasterDb }) => async (params,req,res) => {
  let {
    isWarning, query, dataToUpdate 
  } = params;
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({ MasterDb });
    return await getDependencyCount(query); 
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({ MasterDb });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeleteMaster;
