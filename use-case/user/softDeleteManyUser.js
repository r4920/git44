/**
 *softDeleteManyUser.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete multiple records from database by ids;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : number of deactivated documents. {status, message, data}
 */
const softDeleteManyUser = ({
  userDb,orderItemDb,patientDb,noteDb,orderDb,enterpriseDb,medicationDb,departmentsDb,encounterDb,CustomerDb,TaskDb,CommentDb,PlanDb,Chat_groupDb,Chat_messageDb,ToDoDb,Appointment_scheduleDb,Appointment_slotDb,EventDb,MasterDb,BlogDb,userAuthSettingsDb,userTokensDb,userRoleDb
}) => async (params,req,res) => {
  let {
    isWarning, query, dataToUpdate 
  } = params;
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      userDb,
      orderItemDb,
      patientDb,
      noteDb,
      orderDb,
      enterpriseDb,
      medicationDb,
      departmentsDb,
      encounterDb,
      CustomerDb,
      TaskDb,
      CommentDb,
      PlanDb,
      Chat_groupDb,
      Chat_messageDb,
      ToDoDb,
      Appointment_scheduleDb,
      Appointment_slotDb,
      EventDb,
      MasterDb,
      BlogDb,
      userAuthSettingsDb,
      userTokensDb,
      userRoleDb
    });
    return await getDependencyCount(query);
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({
      userDb,
      orderItemDb,
      patientDb,
      noteDb,
      orderDb,
      enterpriseDb,
      medicationDb,
      departmentsDb,
      encounterDb,
      CustomerDb,
      TaskDb,
      CommentDb,
      PlanDb,
      Chat_groupDb,
      Chat_messageDb,
      ToDoDb,
      Appointment_scheduleDb,
      Appointment_slotDb,
      EventDb,
      MasterDb,
      BlogDb,
      userAuthSettingsDb,
      userTokensDb,
      userRoleDb
    });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeleteManyUser;
