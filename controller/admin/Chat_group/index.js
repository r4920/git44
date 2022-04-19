const Chat_groupDb = require('../../../data-access/Chat_groupDb');
const Chat_messageDb = require('../../../data-access/Chat_messageDb');
const Chat_groupSchema = require('../../../validation/schema/Chat_group');
const createValidation = require('../../../validation')(Chat_groupSchema.createSchema);
const updateValidation = require('../../../validation')(Chat_groupSchema.updateSchema);
const filterValidation = require('../../../validation')(Chat_groupSchema.filterValidationSchema);
const Chat_groupController = require('./Chat_group');

// use-cases imports with dependency injection
const addChat_groupUsecase = require('../../../use-case/Chat_group/addChat_group')({
  Chat_groupDb,
  createValidation 
});
const findAllChat_groupUsecase = require('../../../use-case/Chat_group/findAllChat_group')({
  Chat_groupDb,
  filterValidation
});
const getChat_groupCountUsecase = require('../../../use-case/Chat_group/getChat_groupCount')({
  Chat_groupDb,
  filterValidation
});
const softDeleteManyChat_groupUsecase = require('../../../use-case/Chat_group/softDeleteManyChat_group')({
  Chat_groupDb,
  Chat_messageDb
});
const bulkInsertChat_groupUsecase = require('../../../use-case/Chat_group/bulkInsertChat_group')({ Chat_groupDb });
const bulkUpdateChat_groupUsecase = require('../../../use-case/Chat_group/bulkUpdateChat_group')({ Chat_groupDb });
const deleteManyChat_groupUsecase = require('../../../use-case/Chat_group/deleteManyChat_group')({
  Chat_groupDb,
  Chat_messageDb
});
const softDeleteChat_groupUsecase = require('../../../use-case/Chat_group/softDeleteChat_group')({
  Chat_groupDb,
  Chat_messageDb
});
const partialUpdateChat_groupUsecase = require('../../../use-case/Chat_group/partialUpdateChat_group')({
  Chat_groupDb,
  updateValidation
});
const updateChat_groupUsecase = require('../../../use-case/Chat_group/updateChat_group')({
  Chat_groupDb,
  updateValidation 
});
const getChat_groupUsecase = require('../../../use-case/Chat_group/getChat_group')({
  Chat_groupDb,
  filterValidation
});
const deleteChat_groupUsecase = require('../../../use-case/Chat_group/deleteChat_group')({
  Chat_groupDb,
  Chat_messageDb
});

// controller methods mapping
const addChat_group = Chat_groupController.addChat_group(addChat_groupUsecase);
const findAllChat_group = Chat_groupController.findAllChat_group(findAllChat_groupUsecase);
const getChat_groupCount = Chat_groupController.getChat_groupCount(getChat_groupCountUsecase);
const softDeleteManyChat_group = Chat_groupController.softDeleteManyChat_group(softDeleteManyChat_groupUsecase);
const bulkInsertChat_group = Chat_groupController.bulkInsertChat_group(bulkInsertChat_groupUsecase);
const bulkUpdateChat_group = Chat_groupController.bulkUpdateChat_group(bulkUpdateChat_groupUsecase);
const deleteManyChat_group = Chat_groupController.deleteManyChat_group(deleteManyChat_groupUsecase);
const softDeleteChat_group = Chat_groupController.softDeleteChat_group(softDeleteChat_groupUsecase);
const partialUpdateChat_group = Chat_groupController.partialUpdateChat_group(partialUpdateChat_groupUsecase);
const updateChat_group = Chat_groupController.updateChat_group(updateChat_groupUsecase);
const getChat_groupById = Chat_groupController.getChat_group(getChat_groupUsecase);
const deleteChat_group = Chat_groupController.deleteChat_group(deleteChat_groupUsecase);

module.exports = {
  addChat_group,
  findAllChat_group,
  getChat_groupCount,
  softDeleteManyChat_group,
  bulkInsertChat_group,
  bulkUpdateChat_group,
  deleteManyChat_group,
  softDeleteChat_group,
  partialUpdateChat_group,
  updateChat_group,
  getChat_groupById,
  deleteChat_group,
};