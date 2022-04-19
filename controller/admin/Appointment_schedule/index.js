const Appointment_scheduleDb = require('../../../data-access/Appointment_scheduleDb');
const Appointment_scheduleSchema = require('../../../validation/schema/Appointment_schedule');
const createValidation = require('../../../validation')(Appointment_scheduleSchema.createSchema);
const updateValidation = require('../../../validation')(Appointment_scheduleSchema.updateSchema);
const filterValidation = require('../../../validation')(Appointment_scheduleSchema.filterValidationSchema);
const Appointment_scheduleController = require('./Appointment_schedule');

// use-cases imports with dependency injection
const addAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/addAppointment_schedule')({
  Appointment_scheduleDb,
  createValidation 
});
const findAllAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/findAllAppointment_schedule')({
  Appointment_scheduleDb,
  filterValidation
});
const getAppointment_scheduleCountUsecase = require('../../../use-case/Appointment_schedule/getAppointment_scheduleCount')({
  Appointment_scheduleDb,
  filterValidation
});
const softDeleteManyAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/softDeleteManyAppointment_schedule')({ Appointment_scheduleDb });
const bulkInsertAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/bulkInsertAppointment_schedule')({ Appointment_scheduleDb });
const bulkUpdateAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/bulkUpdateAppointment_schedule')({ Appointment_scheduleDb });
const deleteManyAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/deleteManyAppointment_schedule')({ Appointment_scheduleDb });
const softDeleteAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/softDeleteAppointment_schedule')({ Appointment_scheduleDb });
const partialUpdateAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/partialUpdateAppointment_schedule')({
  Appointment_scheduleDb,
  updateValidation
});
const updateAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/updateAppointment_schedule')({
  Appointment_scheduleDb,
  updateValidation 
});
const getAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/getAppointment_schedule')({
  Appointment_scheduleDb,
  filterValidation
});
const deleteAppointment_scheduleUsecase = require('../../../use-case/Appointment_schedule/deleteAppointment_schedule')({ Appointment_scheduleDb });

// controller methods mapping
const addAppointment_schedule = Appointment_scheduleController.addAppointment_schedule(addAppointment_scheduleUsecase);
const findAllAppointment_schedule = Appointment_scheduleController.findAllAppointment_schedule(findAllAppointment_scheduleUsecase);
const getAppointment_scheduleCount = Appointment_scheduleController.getAppointment_scheduleCount(getAppointment_scheduleCountUsecase);
const softDeleteManyAppointment_schedule = Appointment_scheduleController.softDeleteManyAppointment_schedule(softDeleteManyAppointment_scheduleUsecase);
const bulkInsertAppointment_schedule = Appointment_scheduleController.bulkInsertAppointment_schedule(bulkInsertAppointment_scheduleUsecase);
const bulkUpdateAppointment_schedule = Appointment_scheduleController.bulkUpdateAppointment_schedule(bulkUpdateAppointment_scheduleUsecase);
const deleteManyAppointment_schedule = Appointment_scheduleController.deleteManyAppointment_schedule(deleteManyAppointment_scheduleUsecase);
const softDeleteAppointment_schedule = Appointment_scheduleController.softDeleteAppointment_schedule(softDeleteAppointment_scheduleUsecase);
const partialUpdateAppointment_schedule = Appointment_scheduleController.partialUpdateAppointment_schedule(partialUpdateAppointment_scheduleUsecase);
const updateAppointment_schedule = Appointment_scheduleController.updateAppointment_schedule(updateAppointment_scheduleUsecase);
const getAppointment_scheduleById = Appointment_scheduleController.getAppointment_schedule(getAppointment_scheduleUsecase);
const deleteAppointment_schedule = Appointment_scheduleController.deleteAppointment_schedule(deleteAppointment_scheduleUsecase);

module.exports = {
  addAppointment_schedule,
  findAllAppointment_schedule,
  getAppointment_scheduleCount,
  softDeleteManyAppointment_schedule,
  bulkInsertAppointment_schedule,
  bulkUpdateAppointment_schedule,
  deleteManyAppointment_schedule,
  softDeleteAppointment_schedule,
  partialUpdateAppointment_schedule,
  updateAppointment_schedule,
  getAppointment_scheduleById,
  deleteAppointment_schedule,
};