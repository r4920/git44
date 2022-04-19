const medicationDb = require('../../../../data-access/medicationDb');
const medicationSchema = require('../../../../validation/schema/medication');
const createValidation = require('../../../../validation')(medicationSchema.createSchema);
const updateValidation = require('../../../../validation')(medicationSchema.updateSchema);
const filterValidation = require('../../../../validation')(medicationSchema.filterValidationSchema);
const medicationController = require('./medication');

// use-cases imports with dependency injection
const addMedicationUsecase = require('../../../../use-case/medication/addMedication')({
  medicationDb,
  createValidation 
});
const findAllMedicationUsecase = require('../../../../use-case/medication/findAllMedication')({
  medicationDb,
  filterValidation
});
const getMedicationCountUsecase = require('../../../../use-case/medication/getMedicationCount')({
  medicationDb,
  filterValidation
});
const softDeleteManyMedicationUsecase = require('../../../../use-case/medication/softDeleteManyMedication')({ medicationDb });
const bulkInsertMedicationUsecase = require('../../../../use-case/medication/bulkInsertMedication')({ medicationDb });
const bulkUpdateMedicationUsecase = require('../../../../use-case/medication/bulkUpdateMedication')({ medicationDb });
const deleteManyMedicationUsecase = require('../../../../use-case/medication/deleteManyMedication')({ medicationDb });
const softDeleteMedicationUsecase = require('../../../../use-case/medication/softDeleteMedication')({ medicationDb });
const partialUpdateMedicationUsecase = require('../../../../use-case/medication/partialUpdateMedication')({
  medicationDb,
  updateValidation
});
const updateMedicationUsecase = require('../../../../use-case/medication/updateMedication')({
  medicationDb,
  updateValidation 
});
const getMedicationUsecase = require('../../../../use-case/medication/getMedication')({
  medicationDb,
  filterValidation
});
const deleteMedicationUsecase = require('../../../../use-case/medication/deleteMedication')({ medicationDb });

// controller methods mapping
const addMedication = medicationController.addMedication(addMedicationUsecase);
const findAllMedication = medicationController.findAllMedication(findAllMedicationUsecase);
const getMedicationCount = medicationController.getMedicationCount(getMedicationCountUsecase);
const softDeleteManyMedication = medicationController.softDeleteManyMedication(softDeleteManyMedicationUsecase);
const bulkInsertMedication = medicationController.bulkInsertMedication(bulkInsertMedicationUsecase);
const bulkUpdateMedication = medicationController.bulkUpdateMedication(bulkUpdateMedicationUsecase);
const deleteManyMedication = medicationController.deleteManyMedication(deleteManyMedicationUsecase);
const softDeleteMedication = medicationController.softDeleteMedication(softDeleteMedicationUsecase);
const partialUpdateMedication = medicationController.partialUpdateMedication(partialUpdateMedicationUsecase);
const updateMedication = medicationController.updateMedication(updateMedicationUsecase);
const getMedicationById = medicationController.getMedication(getMedicationUsecase);
const deleteMedication = medicationController.deleteMedication(deleteMedicationUsecase);

module.exports = {
  addMedication,
  findAllMedication,
  getMedicationCount,
  softDeleteManyMedication,
  bulkInsertMedication,
  bulkUpdateMedication,
  deleteManyMedication,
  softDeleteMedication,
  partialUpdateMedication,
  updateMedication,
  getMedicationById,
  deleteMedication,
};