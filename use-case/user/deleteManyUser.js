/**
 *deleteManyUser.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : delete documents from table by using ids.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyUser = ({
  userDb,orderItemDb,patientDb,noteDb,orderDb,enterpriseDb,medicationDb,departmentsDb,encounterDb,CustomerDb,TaskDb,CommentDb,PlanDb,Chat_groupDb,Chat_messageDb,ToDoDb,Appointment_scheduleDb,Appointment_slotDb,EventDb,MasterDb,BlogDb,userAuthSettingsDb,userTokensDb,userRoleDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  if (isWarning){
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
    const deleteWithDependency = makeDeleteWithDependency({
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
    return await deleteWithDependency(query);
  }
};
module.exports = deleteManyUser;
