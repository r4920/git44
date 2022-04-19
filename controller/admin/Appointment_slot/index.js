const Appointment_slotDb = require('../../../data-access/Appointment_slotDb');
const Appointment_scheduleDb = require('../../../data-access/Appointment_scheduleDb');
const Appointment_slotSchema = require('../../../validation/schema/Appointment_slot');
const createValidation = require('../../../validation')(Appointment_slotSchema.createSchema);
const updateValidation = require('../../../validation')(Appointment_slotSchema.updateSchema);
const filterValidation = require('../../../validation')(Appointment_slotSchema.filterValidationSchema);
const Appointment_slotController = require('./Appointment_slot');

// use-cases imports with dependency injection
const addAppointment_slotUsecase = require('../../../use-case/Appointment_slot/addAppointment_slot')({
  Appointment_slotDb,
  createValidation 
});
const findAllAppointment_slotUsecase = require('../../../use-case/Appointment_slot/findAllAppointment_slot')({
  Appointment_slotDb,
  filterValidation
});
const getAppointment_slotCountUsecase = require('../../../use-case/Appointment_slot/getAppointment_slotCount')({
  Appointment_slotDb,
  filterValidation
});
const softDeleteManyAppointment_slotUsecase = require('../../../use-case/Appointment_slot/softDeleteManyAppointment_slot')({
  Appointment_slotDb,
  Appointment_scheduleDb
});
const bulkInsertAppointment_slotUsecase = require('../../../use-case/Appointment_slot/bulkInsertAppointment_slot')({ Appointment_slotDb });
const bulkUpdateAppointment_slotUsecase = require('../../../use-case/Appointment_slot/bulkUpdateAppointment_slot')({ Appointment_slotDb });
const deleteManyAppointment_slotUsecase = require('../../../use-case/Appointment_slot/deleteManyAppointment_slot')({
  Appointment_slotDb,
  Appointment_scheduleDb
});
const softDeleteAppointment_slotUsecase = require('../../../use-case/Appointment_slot/softDeleteAppointment_slot')({
  Appointment_slotDb,
  Appointment_scheduleDb
});
const partialUpdateAppointment_slotUsecase = require('../../../use-case/Appointment_slot/partialUpdateAppointment_slot')({
  Appointment_slotDb,
  updateValidation
});
const updateAppointment_slotUsecase = require('../../../use-case/Appointment_slot/updateAppointment_slot')({
  Appointment_slotDb,
  updateValidation 
});
const getAppointment_slotUsecase = require('../../../use-case/Appointment_slot/getAppointment_slot')({
  Appointment_slotDb,
  filterValidation
});
const deleteAppointment_slotUsecase = require('../../../use-case/Appointment_slot/deleteAppointment_slot')({
  Appointment_slotDb,
  Appointment_scheduleDb
});

// controller methods mapping
const addAppointment_slot = Appointment_slotController.addAppointment_slot(addAppointment_slotUsecase);
const findAllAppointment_slot = Appointment_slotController.findAllAppointment_slot(findAllAppointment_slotUsecase);
const getAppointment_slotCount = Appointment_slotController.getAppointment_slotCount(getAppointment_slotCountUsecase);
const softDeleteManyAppointment_slot = Appointment_slotController.softDeleteManyAppointment_slot(softDeleteManyAppointment_slotUsecase);
const bulkInsertAppointment_slot = Appointment_slotController.bulkInsertAppointment_slot(bulkInsertAppointment_slotUsecase);
const bulkUpdateAppointment_slot = Appointment_slotController.bulkUpdateAppointment_slot(bulkUpdateAppointment_slotUsecase);
const deleteManyAppointment_slot = Appointment_slotController.deleteManyAppointment_slot(deleteManyAppointment_slotUsecase);
const softDeleteAppointment_slot = Appointment_slotController.softDeleteAppointment_slot(softDeleteAppointment_slotUsecase);
const partialUpdateAppointment_slot = Appointment_slotController.partialUpdateAppointment_slot(partialUpdateAppointment_slotUsecase);
const updateAppointment_slot = Appointment_slotController.updateAppointment_slot(updateAppointment_slotUsecase);
const getAppointment_slotById = Appointment_slotController.getAppointment_slot(getAppointment_slotUsecase);
const deleteAppointment_slot = Appointment_slotController.deleteAppointment_slot(deleteAppointment_slotUsecase);

module.exports = {
  addAppointment_slot,
  findAllAppointment_slot,
  getAppointment_slotCount,
  softDeleteManyAppointment_slot,
  bulkInsertAppointment_slot,
  bulkUpdateAppointment_slot,
  deleteManyAppointment_slot,
  softDeleteAppointment_slot,
  partialUpdateAppointment_slot,
  updateAppointment_slot,
  getAppointment_slotById,
  deleteAppointment_slot,
};