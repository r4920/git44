const enterpriseDb = require('../../../data-access/enterpriseDb');
const noteDb = require('../../../data-access/noteDb');
const departmentsDb = require('../../../data-access/departmentsDb');
const enterpriseSchema = require('../../../validation/schema/enterprise');
const createValidation = require('../../../validation')(enterpriseSchema.createSchema);
const updateValidation = require('../../../validation')(enterpriseSchema.updateSchema);
const filterValidation = require('../../../validation')(enterpriseSchema.filterValidationSchema);
const enterpriseController = require('./enterprise');

// use-cases imports with dependency injection
const addEnterpriseUsecase = require('../../../use-case/enterprise/addEnterprise')({
  enterpriseDb,
  createValidation 
});
const findAllEnterpriseUsecase = require('../../../use-case/enterprise/findAllEnterprise')({
  enterpriseDb,
  filterValidation
});
const getEnterpriseCountUsecase = require('../../../use-case/enterprise/getEnterpriseCount')({
  enterpriseDb,
  filterValidation
});
const softDeleteManyEnterpriseUsecase = require('../../../use-case/enterprise/softDeleteManyEnterprise')({
  enterpriseDb,
  noteDb,
  departmentsDb
});
const bulkInsertEnterpriseUsecase = require('../../../use-case/enterprise/bulkInsertEnterprise')({ enterpriseDb });
const bulkUpdateEnterpriseUsecase = require('../../../use-case/enterprise/bulkUpdateEnterprise')({ enterpriseDb });
const deleteManyEnterpriseUsecase = require('../../../use-case/enterprise/deleteManyEnterprise')({
  enterpriseDb,
  noteDb,
  departmentsDb
});
const softDeleteEnterpriseUsecase = require('../../../use-case/enterprise/softDeleteEnterprise')({
  enterpriseDb,
  noteDb,
  departmentsDb
});
const partialUpdateEnterpriseUsecase = require('../../../use-case/enterprise/partialUpdateEnterprise')({
  enterpriseDb,
  updateValidation
});
const updateEnterpriseUsecase = require('../../../use-case/enterprise/updateEnterprise')({
  enterpriseDb,
  updateValidation 
});
const getEnterpriseUsecase = require('../../../use-case/enterprise/getEnterprise')({
  enterpriseDb,
  filterValidation
});
const deleteEnterpriseUsecase = require('../../../use-case/enterprise/deleteEnterprise')({
  enterpriseDb,
  noteDb,
  departmentsDb
});

// controller methods mapping
const addEnterprise = enterpriseController.addEnterprise(addEnterpriseUsecase);
const findAllEnterprise = enterpriseController.findAllEnterprise(findAllEnterpriseUsecase);
const getEnterpriseCount = enterpriseController.getEnterpriseCount(getEnterpriseCountUsecase);
const softDeleteManyEnterprise = enterpriseController.softDeleteManyEnterprise(softDeleteManyEnterpriseUsecase);
const bulkInsertEnterprise = enterpriseController.bulkInsertEnterprise(bulkInsertEnterpriseUsecase);
const bulkUpdateEnterprise = enterpriseController.bulkUpdateEnterprise(bulkUpdateEnterpriseUsecase);
const deleteManyEnterprise = enterpriseController.deleteManyEnterprise(deleteManyEnterpriseUsecase);
const softDeleteEnterprise = enterpriseController.softDeleteEnterprise(softDeleteEnterpriseUsecase);
const partialUpdateEnterprise = enterpriseController.partialUpdateEnterprise(partialUpdateEnterpriseUsecase);
const updateEnterprise = enterpriseController.updateEnterprise(updateEnterpriseUsecase);
const getEnterpriseById = enterpriseController.getEnterprise(getEnterpriseUsecase);
const deleteEnterprise = enterpriseController.deleteEnterprise(deleteEnterpriseUsecase);

module.exports = {
  addEnterprise,
  findAllEnterprise,
  getEnterpriseCount,
  softDeleteManyEnterprise,
  bulkInsertEnterprise,
  bulkUpdateEnterprise,
  deleteManyEnterprise,
  softDeleteEnterprise,
  partialUpdateEnterprise,
  updateEnterprise,
  getEnterpriseById,
  deleteEnterprise,
};