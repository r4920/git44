const encounterDb = require('../../../../data-access/encounterDb');
const encounterSchema = require('../../../../validation/schema/encounter');
const createValidation = require('../../../../validation')(encounterSchema.createSchema);
const updateValidation = require('../../../../validation')(encounterSchema.updateSchema);
const filterValidation = require('../../../../validation')(encounterSchema.filterValidationSchema);
const encounterController = require('./encounter');

// use-cases imports with dependency injection
const addEncounterUsecase = require('../../../../use-case/encounter/addEncounter')({
  encounterDb,
  createValidation 
});
const findAllEncounterUsecase = require('../../../../use-case/encounter/findAllEncounter')({
  encounterDb,
  filterValidation
});
const getEncounterCountUsecase = require('../../../../use-case/encounter/getEncounterCount')({
  encounterDb,
  filterValidation
});
const softDeleteManyEncounterUsecase = require('../../../../use-case/encounter/softDeleteManyEncounter')({ encounterDb });
const bulkInsertEncounterUsecase = require('../../../../use-case/encounter/bulkInsertEncounter')({ encounterDb });
const bulkUpdateEncounterUsecase = require('../../../../use-case/encounter/bulkUpdateEncounter')({ encounterDb });
const deleteManyEncounterUsecase = require('../../../../use-case/encounter/deleteManyEncounter')({ encounterDb });
const softDeleteEncounterUsecase = require('../../../../use-case/encounter/softDeleteEncounter')({ encounterDb });
const partialUpdateEncounterUsecase = require('../../../../use-case/encounter/partialUpdateEncounter')({
  encounterDb,
  updateValidation
});
const updateEncounterUsecase = require('../../../../use-case/encounter/updateEncounter')({
  encounterDb,
  updateValidation 
});
const getEncounterUsecase = require('../../../../use-case/encounter/getEncounter')({
  encounterDb,
  filterValidation
});
const deleteEncounterUsecase = require('../../../../use-case/encounter/deleteEncounter')({ encounterDb });

// controller methods mapping
const addEncounter = encounterController.addEncounter(addEncounterUsecase);
const findAllEncounter = encounterController.findAllEncounter(findAllEncounterUsecase);
const getEncounterCount = encounterController.getEncounterCount(getEncounterCountUsecase);
const softDeleteManyEncounter = encounterController.softDeleteManyEncounter(softDeleteManyEncounterUsecase);
const bulkInsertEncounter = encounterController.bulkInsertEncounter(bulkInsertEncounterUsecase);
const bulkUpdateEncounter = encounterController.bulkUpdateEncounter(bulkUpdateEncounterUsecase);
const deleteManyEncounter = encounterController.deleteManyEncounter(deleteManyEncounterUsecase);
const softDeleteEncounter = encounterController.softDeleteEncounter(softDeleteEncounterUsecase);
const partialUpdateEncounter = encounterController.partialUpdateEncounter(partialUpdateEncounterUsecase);
const updateEncounter = encounterController.updateEncounter(updateEncounterUsecase);
const getEncounterById = encounterController.getEncounter(getEncounterUsecase);
const deleteEncounter = encounterController.deleteEncounter(deleteEncounterUsecase);

module.exports = {
  addEncounter,
  findAllEncounter,
  getEncounterCount,
  softDeleteManyEncounter,
  bulkInsertEncounter,
  bulkUpdateEncounter,
  deleteManyEncounter,
  softDeleteEncounter,
  partialUpdateEncounter,
  updateEncounter,
  getEncounterById,
  deleteEncounter,
};