const response = require('../../utils/response');

const getDependencyCount = ({
  userDb,orderItemDb,patientDb,noteDb,orderDb,enterpriseDb,medicationDb,departmentsDb,encounterDb,CustomerDb,TaskDb,CommentDb,PlanDb,Chat_groupDb,Chat_messageDb,ToDoDb,Appointment_scheduleDb,Appointment_slotDb,EventDb,MasterDb,BlogDb,userAuthSettingsDb,userTokensDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const orderItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderItemCnt =  await orderItemDb.count(orderItemFilter);

    const patientFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const patientCnt =  await patientDb.count(patientFilter);

    const noteFilter = { '$or': [{ provider : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const noteCnt =  await noteDb.count(noteFilter);

    const orderFilter = { '$or': [{ orderBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  await orderDb.count(orderFilter);

    const enterpriseFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const enterpriseCnt =  await enterpriseDb.count(enterpriseFilter);

    const medicationFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const medicationCnt =  await medicationDb.count(medicationFilter);

    const departmentsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const departmentsCnt =  await departmentsDb.count(departmentsFilter);

    const encounterFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const encounterCnt =  await encounterDb.count(encounterFilter);

    const CustomerFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const CustomerCnt =  await CustomerDb.count(CustomerFilter);

    const TaskFilter = { '$or': [{ completedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const TaskCnt =  await TaskDb.count(TaskFilter);

    const CommentFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const CommentCnt =  await CommentDb.count(CommentFilter);

    const PlanFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const PlanCnt =  await PlanDb.count(PlanFilter);

    const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_groupCnt =  await Chat_groupDb.count(Chat_groupFilter);

    const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_messageCnt =  await Chat_messageDb.count(Chat_messageFilter);

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  await ToDoDb.count(ToDoFilter);

    const Appointment_scheduleFilter = { '$or': [{ host : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_scheduleCnt =  await Appointment_scheduleDb.count(Appointment_scheduleFilter);

    const Appointment_slotFilter = { '$or': [{ userId : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_slotCnt =  await Appointment_slotDb.count(Appointment_slotFilter);

    const EventFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const EventCnt =  await EventDb.count(EventFilter);

    const MasterFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const MasterCnt =  await MasterDb.count(MasterFilter);

    const BlogFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const BlogCnt =  await BlogDb.count(BlogFilter);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  await userDb.count(userFilter);

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  await userAuthSettingsDb.count(userAuthSettingsFilter);

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  await userTokensDb.count(userTokensFilter);

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  await userRoleDb.count(userRoleFilter);
    let result = {
      orderItem :orderItemCnt ,
      patient :patientCnt ,
      note :noteCnt ,
      order :orderCnt ,
      enterprise :enterpriseCnt ,
      medication :medicationCnt ,
      departments :departmentsCnt ,
      encounter :encounterCnt ,
      Customer :CustomerCnt ,
      Task :TaskCnt ,
      Comment :CommentCnt ,
      Plan :PlanCnt ,
      Chat_group :Chat_groupCnt ,
      Chat_message :Chat_messageCnt ,
      ToDo :ToDoCnt ,
      Appointment_schedule :Appointment_scheduleCnt ,
      Appointment_slot :Appointment_slotCnt ,
      Event :EventCnt ,
      Master :MasterCnt ,
      Blog :BlogCnt ,
      user :userCnt + 1,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  user : 0 }
    });
  }
};

const deleteWithDependency = ({
  userDb,orderItemDb,patientDb,noteDb,orderDb,enterpriseDb,medicationDb,departmentsDb,encounterDb,CustomerDb,TaskDb,CommentDb,PlanDb,Chat_groupDb,Chat_messageDb,ToDoDb,Appointment_scheduleDb,Appointment_slotDb,EventDb,MasterDb,BlogDb,userAuthSettingsDb,userTokensDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const orderItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderItemCnt =  (await orderItemDb.destroy(orderItemFilter)).length;

    const patientFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const patientCnt =  (await patientDb.destroy(patientFilter)).length;

    const noteFilter = { '$or': [{ provider : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const noteCnt =  (await noteDb.destroy(noteFilter)).length;

    const orderFilter = { '$or': [{ orderBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  (await orderDb.destroy(orderFilter)).length;

    const enterpriseFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const enterpriseCnt =  (await enterpriseDb.destroy(enterpriseFilter)).length;

    const medicationFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const medicationCnt =  (await medicationDb.destroy(medicationFilter)).length;

    const departmentsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const departmentsCnt =  (await departmentsDb.destroy(departmentsFilter)).length;

    const encounterFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const encounterCnt =  (await encounterDb.destroy(encounterFilter)).length;

    const CustomerFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const CustomerCnt =  (await CustomerDb.destroy(CustomerFilter)).length;

    const TaskFilter = { '$or': [{ completedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const TaskCnt =  (await TaskDb.destroy(TaskFilter)).length;

    const CommentFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const CommentCnt =  (await CommentDb.destroy(CommentFilter)).length;

    const PlanFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const PlanCnt =  (await PlanDb.destroy(PlanFilter)).length;

    const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_groupCnt =  (await Chat_groupDb.destroy(Chat_groupFilter)).length;

    const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.destroy(Chat_messageFilter)).length;

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  (await ToDoDb.destroy(ToDoFilter)).length;

    const Appointment_scheduleFilter = { '$or': [{ host : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_scheduleCnt =  (await Appointment_scheduleDb.destroy(Appointment_scheduleFilter)).length;

    const Appointment_slotFilter = { '$or': [{ userId : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_slotCnt =  (await Appointment_slotDb.destroy(Appointment_slotFilter)).length;

    const EventFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const EventCnt =  (await EventDb.destroy(EventFilter)).length;

    const MasterFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const MasterCnt =  (await MasterDb.destroy(MasterFilter)).length;

    const BlogFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const BlogCnt =  (await BlogDb.destroy(BlogFilter)).length;

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.destroy(userFilter)).length;

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  (await userAuthSettingsDb.destroy(userAuthSettingsFilter)).length;

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.destroy(userTokensFilter)).length;

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.destroy(userRoleFilter)).length;
    let deleted = (await userDb.destroy(filter)).length;
    let result = {
      orderItem :orderItemCnt ,
      patient :patientCnt ,
      note :noteCnt ,
      order :orderCnt ,
      enterprise :enterpriseCnt ,
      medication :medicationCnt ,
      departments :departmentsCnt ,
      encounter :encounterCnt ,
      Customer :CustomerCnt ,
      Task :TaskCnt ,
      Comment :CommentCnt ,
      Plan :PlanCnt ,
      Chat_group :Chat_groupCnt ,
      Chat_message :Chat_messageCnt ,
      ToDo :ToDoCnt ,
      Appointment_schedule :Appointment_scheduleCnt ,
      Appointment_slot :Appointment_slotCnt ,
      Event :EventCnt ,
      Master :MasterCnt ,
      Blog :BlogCnt ,
      user :userCnt + deleted,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  userDb,orderItemDb,patientDb,noteDb,orderDb,enterpriseDb,medicationDb,departmentsDb,encounterDb,CustomerDb,TaskDb,CommentDb,PlanDb,Chat_groupDb,Chat_messageDb,ToDoDb,Appointment_scheduleDb,Appointment_slotDb,EventDb,MasterDb,BlogDb,userAuthSettingsDb,userTokensDb,userRoleDb
}) => async (filter,updateBody) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const orderItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderItemCnt =  (await orderItemDb.update(orderItemFilter,updateBody)).length;

    const patientFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const patientCnt =  (await patientDb.update(patientFilter,updateBody)).length;

    const noteFilter = { '$or': [{ provider : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const noteCnt =  (await noteDb.update(noteFilter,updateBody)).length;

    const orderFilter = { '$or': [{ orderBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  (await orderDb.update(orderFilter,updateBody)).length;

    const enterpriseFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const enterpriseCnt =  (await enterpriseDb.update(enterpriseFilter,updateBody)).length;

    const medicationFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const medicationCnt =  (await medicationDb.update(medicationFilter,updateBody)).length;

    const departmentsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const departmentsCnt =  (await departmentsDb.update(departmentsFilter,updateBody)).length;

    const encounterFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const encounterCnt =  (await encounterDb.update(encounterFilter,updateBody)).length;

    const CustomerFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const CustomerCnt =  (await CustomerDb.update(CustomerFilter,updateBody)).length;

    const TaskFilter = { '$or': [{ completedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const TaskCnt =  (await TaskDb.update(TaskFilter,updateBody)).length;

    const CommentFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const CommentCnt =  (await CommentDb.update(CommentFilter,updateBody)).length;

    const PlanFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const PlanCnt =  (await PlanDb.update(PlanFilter,updateBody)).length;

    const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_groupCnt =  (await Chat_groupDb.update(Chat_groupFilter,updateBody)).length;

    const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.update(Chat_messageFilter,updateBody)).length;

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  (await ToDoDb.update(ToDoFilter,updateBody)).length;

    const Appointment_scheduleFilter = { '$or': [{ host : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_scheduleCnt =  (await Appointment_scheduleDb.update(Appointment_scheduleFilter,updateBody)).length;

    const Appointment_slotFilter = { '$or': [{ userId : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_slotCnt =  (await Appointment_slotDb.update(Appointment_slotFilter,updateBody)).length;

    const EventFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const EventCnt =  (await EventDb.update(EventFilter,updateBody)).length;

    const MasterFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const MasterCnt =  (await MasterDb.update(MasterFilter,updateBody)).length;

    const BlogFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const BlogCnt =  (await BlogDb.update(BlogFilter,updateBody)).length;

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.update(userFilter,updateBody)).length;

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  (await userAuthSettingsDb.update(userAuthSettingsFilter,updateBody)).length;

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.update(userTokensFilter,updateBody)).length;

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.update(userRoleFilter,updateBody)).length;
    let updated = (await userDb.update(filter,updateBody)).length;
    let result = {
      orderItem :orderItemCnt ,
      patient :patientCnt ,
      note :noteCnt ,
      order :orderCnt ,
      enterprise :enterpriseCnt ,
      medication :medicationCnt ,
      departments :departmentsCnt ,
      encounter :encounterCnt ,
      Customer :CustomerCnt ,
      Task :TaskCnt ,
      Comment :CommentCnt ,
      Plan :PlanCnt ,
      Chat_group :Chat_groupCnt ,
      Chat_message :Chat_messageCnt ,
      ToDo :ToDoCnt ,
      Appointment_schedule :Appointment_scheduleCnt ,
      Appointment_slot :Appointment_slotCnt ,
      Event :EventCnt ,
      Master :MasterCnt ,
      Blog :BlogCnt ,
      user :userCnt + updated,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
