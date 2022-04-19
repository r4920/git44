const ToDoDb = require('../../../../data-access/ToDoDb');
const ToDoSchema = require('../../../../validation/schema/ToDo');
const createValidation = require('../../../../validation')(ToDoSchema.createSchema);
const updateValidation = require('../../../../validation')(ToDoSchema.updateSchema);
const filterValidation = require('../../../../validation')(ToDoSchema.filterValidationSchema);
const ToDoController = require('./ToDo');

// use-cases imports with dependency injection
const addToDoUsecase = require('../../../../use-case/ToDo/addToDo')({
  ToDoDb,
  createValidation 
});
const findAllToDoUsecase = require('../../../../use-case/ToDo/findAllToDo')({
  ToDoDb,
  filterValidation
});
const getToDoCountUsecase = require('../../../../use-case/ToDo/getToDoCount')({
  ToDoDb,
  filterValidation
});
const softDeleteManyToDoUsecase = require('../../../../use-case/ToDo/softDeleteManyToDo')({ ToDoDb });
const bulkInsertToDoUsecase = require('../../../../use-case/ToDo/bulkInsertToDo')({ ToDoDb });
const bulkUpdateToDoUsecase = require('../../../../use-case/ToDo/bulkUpdateToDo')({ ToDoDb });
const deleteManyToDoUsecase = require('../../../../use-case/ToDo/deleteManyToDo')({ ToDoDb });
const softDeleteToDoUsecase = require('../../../../use-case/ToDo/softDeleteToDo')({ ToDoDb });
const partialUpdateToDoUsecase = require('../../../../use-case/ToDo/partialUpdateToDo')({
  ToDoDb,
  updateValidation
});
const updateToDoUsecase = require('../../../../use-case/ToDo/updateToDo')({
  ToDoDb,
  updateValidation 
});
const getToDoUsecase = require('../../../../use-case/ToDo/getToDo')({
  ToDoDb,
  filterValidation
});
const deleteToDoUsecase = require('../../../../use-case/ToDo/deleteToDo')({ ToDoDb });

// controller methods mapping
const addToDo = ToDoController.addToDo(addToDoUsecase);
const findAllToDo = ToDoController.findAllToDo(findAllToDoUsecase);
const getToDoCount = ToDoController.getToDoCount(getToDoCountUsecase);
const softDeleteManyToDo = ToDoController.softDeleteManyToDo(softDeleteManyToDoUsecase);
const bulkInsertToDo = ToDoController.bulkInsertToDo(bulkInsertToDoUsecase);
const bulkUpdateToDo = ToDoController.bulkUpdateToDo(bulkUpdateToDoUsecase);
const deleteManyToDo = ToDoController.deleteManyToDo(deleteManyToDoUsecase);
const softDeleteToDo = ToDoController.softDeleteToDo(softDeleteToDoUsecase);
const partialUpdateToDo = ToDoController.partialUpdateToDo(partialUpdateToDoUsecase);
const updateToDo = ToDoController.updateToDo(updateToDoUsecase);
const getToDoById = ToDoController.getToDo(getToDoUsecase);
const deleteToDo = ToDoController.deleteToDo(deleteToDoUsecase);

module.exports = {
  addToDo,
  findAllToDo,
  getToDoCount,
  softDeleteManyToDo,
  bulkInsertToDo,
  bulkUpdateToDo,
  deleteManyToDo,
  softDeleteToDo,
  partialUpdateToDo,
  updateToDo,
  getToDoById,
  deleteToDo,
};