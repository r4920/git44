const patientDb = require('../../../data-access/patientDb');
const patientSchema = require('../../../validation/schema/patient');
const createValidation = require('../../../validation')(patientSchema.createSchema);
const updateValidation = require('../../../validation')(patientSchema.updateSchema);
const filterValidation = require('../../../validation')(patientSchema.filterValidationSchema);
const patientController = require('./patient');

// use-cases imports with dependency injection
const addPatientUsecase = require('../../../use-case/patient/addPatient')({
  patientDb,
  createValidation 
});
const findAllPatientUsecase = require('../../../use-case/patient/findAllPatient')({
  patientDb,
  filterValidation
});
const getPatientCountUsecase = require('../../../use-case/patient/getPatientCount')({
  patientDb,
  filterValidation
});
const softDeleteManyPatientUsecase = require('../../../use-case/patient/softDeleteManyPatient')({ patientDb });
const bulkInsertPatientUsecase = require('../../../use-case/patient/bulkInsertPatient')({ patientDb });
const bulkUpdatePatientUsecase = require('../../../use-case/patient/bulkUpdatePatient')({ patientDb });
const deleteManyPatientUsecase = require('../../../use-case/patient/deleteManyPatient')({ patientDb });
const softDeletePatientUsecase = require('../../../use-case/patient/softDeletePatient')({ patientDb });
const partialUpdatePatientUsecase = require('../../../use-case/patient/partialUpdatePatient')({
  patientDb,
  updateValidation
});
const updatePatientUsecase = require('../../../use-case/patient/updatePatient')({
  patientDb,
  updateValidation 
});
const getPatientUsecase = require('../../../use-case/patient/getPatient')({
  patientDb,
  filterValidation
});
const deletePatientUsecase = require('../../../use-case/patient/deletePatient')({ patientDb });

// controller methods mapping
const addPatient = patientController.addPatient(addPatientUsecase);
const findAllPatient = patientController.findAllPatient(findAllPatientUsecase);
const getPatientCount = patientController.getPatientCount(getPatientCountUsecase);
const softDeleteManyPatient = patientController.softDeleteManyPatient(softDeleteManyPatientUsecase);
const bulkInsertPatient = patientController.bulkInsertPatient(bulkInsertPatientUsecase);
const bulkUpdatePatient = patientController.bulkUpdatePatient(bulkUpdatePatientUsecase);
const deleteManyPatient = patientController.deleteManyPatient(deleteManyPatientUsecase);
const softDeletePatient = patientController.softDeletePatient(softDeletePatientUsecase);
const partialUpdatePatient = patientController.partialUpdatePatient(partialUpdatePatientUsecase);
const updatePatient = patientController.updatePatient(updatePatientUsecase);
const getPatientById = patientController.getPatient(getPatientUsecase);
const deletePatient = patientController.deletePatient(deletePatientUsecase);

module.exports = {
  addPatient,
  findAllPatient,
  getPatientCount,
  softDeleteManyPatient,
  bulkInsertPatient,
  bulkUpdatePatient,
  deleteManyPatient,
  softDeletePatient,
  partialUpdatePatient,
  updatePatient,
  getPatientById,
  deletePatient,
};