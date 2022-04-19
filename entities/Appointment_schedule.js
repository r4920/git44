module.exports = (Appointment_schedule) => {

  let newAppointment_schedule = { 
    id: Appointment_schedule.id,
    slot: Appointment_schedule.slot,
    startTime: Appointment_schedule.startTime,
    endTime: Appointment_schedule.endTime,
    date: Appointment_schedule.date,
    offset: Appointment_schedule.offset,
    participant: Appointment_schedule.participant,
    host: Appointment_schedule.host,
    isCancelled: Appointment_schedule.isCancelled,
    isActive: Appointment_schedule.isActive,
    createdAt: Appointment_schedule.createdAt,
    updatedAt: Appointment_schedule.updatedAt,
    updatedBy: Appointment_schedule.updatedBy,
    addedBy: Appointment_schedule.addedBy,
    isDeleted: Appointment_schedule.isDeleted,
  };

  // remove undefined values
  if (newAppointment_schedule.id){
    Object.keys(newAppointment_schedule).forEach(key =>{
      if (newAppointment_schedule[key] === undefined) return newAppointment_schedule[key] = null;
    });
  } else {
    Object.keys(newAppointment_schedule).forEach(key => newAppointment_schedule[key] === undefined && delete newAppointment_schedule[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newAppointment_schedule) => {
   *   if (!newAppointment_schedule.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newAppointment_schedule) 
   */
  return Object.freeze(newAppointment_schedule);
};
