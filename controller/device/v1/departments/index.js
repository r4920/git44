const departmentsDb = require('../../../../data-access/departmentsDb');
const departmentsSchema = require('../../../../validation/schema/departments');
const createValidation = require('../../../../validation')(departmentsSchema.createSchema);
const updateValidation = require('../../../../validation')(departmentsSchema.updateSchema);
const filterValidation = require('../../../../validation')(departmentsSchema.filterValidationSchema);
const departmentsController = require('./departments');

// use-cases imports with dependency injection
const addDepartmentsUsecase = require('../../../../use-case/departments/addDepartments')({
  departmentsDb,
  createValidation 
});
const findAllDepartmentsUsecase = require('../../../../use-case/departments/findAllDepartments')({
  departmentsDb,
  filterValidation
});
const getDepartmentsCountUsecase = require('../../../../use-case/departments/getDepartmentsCount')({
  departmentsDb,
  filterValidation
});
const softDeleteManyDepartmentsUsecase = require('../../../../use-case/departments/softDeleteManyDepartments')({ departmentsDb });
const bulkInsertDepartmentsUsecase = require('../../../../use-case/departments/bulkInsertDepartments')({ departmentsDb });
const bulkUpdateDepartmentsUsecase = require('../../../../use-case/departments/bulkUpdateDepartments')({ departmentsDb });
const deleteManyDepartmentsUsecase = require('../../../../use-case/departments/deleteManyDepartments')({ departmentsDb });
const softDeleteDepartmentsUsecase = require('../../../../use-case/departments/softDeleteDepartments')({ departmentsDb });
const partialUpdateDepartmentsUsecase = require('../../../../use-case/departments/partialUpdateDepartments')({
  departmentsDb,
  updateValidation
});
const updateDepartmentsUsecase = require('../../../../use-case/departments/updateDepartments')({
  departmentsDb,
  updateValidation 
});
const getDepartmentsUsecase = require('../../../../use-case/departments/getDepartments')({
  departmentsDb,
  filterValidation
});
const deleteDepartmentsUsecase = require('../../../../use-case/departments/deleteDepartments')({ departmentsDb });

// controller methods mapping
const addDepartments = departmentsController.addDepartments(addDepartmentsUsecase);
const findAllDepartments = departmentsController.findAllDepartments(findAllDepartmentsUsecase);
const getDepartmentsCount = departmentsController.getDepartmentsCount(getDepartmentsCountUsecase);
const softDeleteManyDepartments = departmentsController.softDeleteManyDepartments(softDeleteManyDepartmentsUsecase);
const bulkInsertDepartments = departmentsController.bulkInsertDepartments(bulkInsertDepartmentsUsecase);
const bulkUpdateDepartments = departmentsController.bulkUpdateDepartments(bulkUpdateDepartmentsUsecase);
const deleteManyDepartments = departmentsController.deleteManyDepartments(deleteManyDepartmentsUsecase);
const softDeleteDepartments = departmentsController.softDeleteDepartments(softDeleteDepartmentsUsecase);
const partialUpdateDepartments = departmentsController.partialUpdateDepartments(partialUpdateDepartmentsUsecase);
const updateDepartments = departmentsController.updateDepartments(updateDepartmentsUsecase);
const getDepartmentsById = departmentsController.getDepartments(getDepartmentsUsecase);
const deleteDepartments = departmentsController.deleteDepartments(deleteDepartmentsUsecase);

module.exports = {
  addDepartments,
  findAllDepartments,
  getDepartmentsCount,
  softDeleteManyDepartments,
  bulkInsertDepartments,
  bulkUpdateDepartments,
  deleteManyDepartments,
  softDeleteDepartments,
  partialUpdateDepartments,
  updateDepartments,
  getDepartmentsById,
  deleteDepartments,
};