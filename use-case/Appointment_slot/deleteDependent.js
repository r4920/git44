const response = require('../../utils/response');

const getDependencyCount = ({
  Appointment_slotDb,Appointment_scheduleDb
})=> async (filter) =>{
  let Appointment_slot = await Appointment_slotDb.findAll(filter);
  if (Appointment_slot.length){
    let Appointment_slotIds = Appointment_slot.map((obj) => obj.id);

    const Appointment_scheduleFilter = { '$or': [{ slot : { '$in' : Appointment_slotIds } }] };
    const Appointment_scheduleCnt =  await Appointment_scheduleDb.count(Appointment_scheduleFilter);
    let result = { Appointment_schedule :Appointment_scheduleCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  Appointment_slot : 0 }
    });
  }
};

const deleteWithDependency = ({
  Appointment_slotDb,Appointment_scheduleDb
})=> async (filter) =>{
  let Appointment_slot = await Appointment_slotDb.findAll(filter);
  if (Appointment_slot.length){
    let Appointment_slotIds = Appointment_slot.map((obj) => obj.id);

    const Appointment_scheduleFilter = { '$or': [{ slot : { '$in' : Appointment_slotIds } }] };
    const Appointment_scheduleCnt =  (await Appointment_scheduleDb.destroy(Appointment_scheduleFilter)).length;
    let deleted = (await Appointment_slotDb.destroy(filter)).length;
    let result = { Appointment_schedule :Appointment_scheduleCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  Appointment_slot : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  Appointment_slotDb,Appointment_scheduleDb
}) => async (filter,updateBody) =>{
  let Appointment_slot = await Appointment_slotDb.findAll(filter);
  if (Appointment_slot.length){
    let Appointment_slotIds = Appointment_slot.map((obj) => obj.id);

    const Appointment_scheduleFilter = { '$or': [{ slot : { '$in' : Appointment_slotIds } }] };
    const Appointment_scheduleCnt =  (await Appointment_scheduleDb.update(Appointment_scheduleFilter,updateBody)).length;
    let updated = (await Appointment_slotDb.update(filter,updateBody)).length;
    let result = { Appointment_schedule :Appointment_scheduleCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  Appointment_slot : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
