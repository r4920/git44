const TaskDb = require('../../../../data-access/TaskDb');
const TaskSchema = require('../../../../validation/schema/Task');
const createValidation = require('../../../../validation')(TaskSchema.createSchema);
const updateValidation = require('../../../../validation')(TaskSchema.updateSchema);
const filterValidation = require('../../../../validation')(TaskSchema.filterValidationSchema);
const TaskController = require('./Task');

// use-cases imports with dependency injection
const addTaskUsecase = require('../../../../use-case/Task/addTask')({
  TaskDb,
  createValidation 
});
const findAllTaskUsecase = require('../../../../use-case/Task/findAllTask')({
  TaskDb,
  filterValidation
});
const getTaskCountUsecase = require('../../../../use-case/Task/getTaskCount')({
  TaskDb,
  filterValidation
});
const softDeleteManyTaskUsecase = require('../../../../use-case/Task/softDeleteManyTask')({ TaskDb });
const bulkInsertTaskUsecase = require('../../../../use-case/Task/bulkInsertTask')({ TaskDb });
const bulkUpdateTaskUsecase = require('../../../../use-case/Task/bulkUpdateTask')({ TaskDb });
const deleteManyTaskUsecase = require('../../../../use-case/Task/deleteManyTask')({ TaskDb });
const softDeleteTaskUsecase = require('../../../../use-case/Task/softDeleteTask')({ TaskDb });
const partialUpdateTaskUsecase = require('../../../../use-case/Task/partialUpdateTask')({
  TaskDb,
  updateValidation
});
const updateTaskUsecase = require('../../../../use-case/Task/updateTask')({
  TaskDb,
  updateValidation 
});
const getTaskUsecase = require('../../../../use-case/Task/getTask')({
  TaskDb,
  filterValidation
});
const deleteTaskUsecase = require('../../../../use-case/Task/deleteTask')({ TaskDb });

// controller methods mapping
const addTask = TaskController.addTask(addTaskUsecase);
const findAllTask = TaskController.findAllTask(findAllTaskUsecase);
const getTaskCount = TaskController.getTaskCount(getTaskCountUsecase);
const softDeleteManyTask = TaskController.softDeleteManyTask(softDeleteManyTaskUsecase);
const bulkInsertTask = TaskController.bulkInsertTask(bulkInsertTaskUsecase);
const bulkUpdateTask = TaskController.bulkUpdateTask(bulkUpdateTaskUsecase);
const deleteManyTask = TaskController.deleteManyTask(deleteManyTaskUsecase);
const softDeleteTask = TaskController.softDeleteTask(softDeleteTaskUsecase);
const partialUpdateTask = TaskController.partialUpdateTask(partialUpdateTaskUsecase);
const updateTask = TaskController.updateTask(updateTaskUsecase);
const getTaskById = TaskController.getTask(getTaskUsecase);
const deleteTask = TaskController.deleteTask(deleteTaskUsecase);

module.exports = {
  addTask,
  findAllTask,
  getTaskCount,
  softDeleteManyTask,
  bulkInsertTask,
  bulkUpdateTask,
  deleteManyTask,
  softDeleteTask,
  partialUpdateTask,
  updateTask,
  getTaskById,
  deleteTask,
};