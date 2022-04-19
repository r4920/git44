module.exports = (Appointment_slot) => {

  let newAppointment_slot = { 
    id: Appointment_slot.id,
    startTime: Appointment_slot.startTime,
    endTime: Appointment_slot.endTime,
    offset: Appointment_slot.offset,
    appliedFrom: Appointment_slot.appliedFrom,
    appliedTo: Appointment_slot.appliedTo,
    userId: Appointment_slot.userId,
    isActive: Appointment_slot.isActive,
    createdAt: Appointment_slot.createdAt,
    updatedAt: Appointment_slot.updatedAt,
    updatedBy: Appointment_slot.updatedBy,
    addedBy: Appointment_slot.addedBy,
    isDeleted: Appointment_slot.isDeleted,
  };

  // remove undefined values
  if (newAppointment_slot.id){
    Object.keys(newAppointment_slot).forEach(key =>{
      if (newAppointment_slot[key] === undefined) return newAppointment_slot[key] = null;
    });
  } else {
    Object.keys(newAppointment_slot).forEach(key => newAppointment_slot[key] === undefined && delete newAppointment_slot[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newAppointment_slot) => {
   *   if (!newAppointment_slot.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newAppointment_slot) 
   */
  return Object.freeze(newAppointment_slot);
};
