const Chat_messageDb = require('../../../../data-access/Chat_messageDb');
const Chat_messageSchema = require('../../../../validation/schema/Chat_message');
const createValidation = require('../../../../validation')(Chat_messageSchema.createSchema);
const updateValidation = require('../../../../validation')(Chat_messageSchema.updateSchema);
const filterValidation = require('../../../../validation')(Chat_messageSchema.filterValidationSchema);
const Chat_messageController = require('./Chat_message');

// use-cases imports with dependency injection
const addChat_messageUsecase = require('../../../../use-case/Chat_message/addChat_message')({
  Chat_messageDb,
  createValidation 
});
const findAllChat_messageUsecase = require('../../../../use-case/Chat_message/findAllChat_message')({
  Chat_messageDb,
  filterValidation
});
const getChat_messageCountUsecase = require('../../../../use-case/Chat_message/getChat_messageCount')({
  Chat_messageDb,
  filterValidation
});
const softDeleteManyChat_messageUsecase = require('../../../../use-case/Chat_message/softDeleteManyChat_message')({ Chat_messageDb });
const bulkInsertChat_messageUsecase = require('../../../../use-case/Chat_message/bulkInsertChat_message')({ Chat_messageDb });
const bulkUpdateChat_messageUsecase = require('../../../../use-case/Chat_message/bulkUpdateChat_message')({ Chat_messageDb });
const deleteManyChat_messageUsecase = require('../../../../use-case/Chat_message/deleteManyChat_message')({ Chat_messageDb });
const softDeleteChat_messageUsecase = require('../../../../use-case/Chat_message/softDeleteChat_message')({ Chat_messageDb });
const partialUpdateChat_messageUsecase = require('../../../../use-case/Chat_message/partialUpdateChat_message')({
  Chat_messageDb,
  updateValidation
});
const updateChat_messageUsecase = require('../../../../use-case/Chat_message/updateChat_message')({
  Chat_messageDb,
  updateValidation 
});
const getChat_messageUsecase = require('../../../../use-case/Chat_message/getChat_message')({
  Chat_messageDb,
  filterValidation
});
const deleteChat_messageUsecase = require('../../../../use-case/Chat_message/deleteChat_message')({ Chat_messageDb });

// controller methods mapping
const addChat_message = Chat_messageController.addChat_message(addChat_messageUsecase);
const findAllChat_message = Chat_messageController.findAllChat_message(findAllChat_messageUsecase);
const getChat_messageCount = Chat_messageController.getChat_messageCount(getChat_messageCountUsecase);
const softDeleteManyChat_message = Chat_messageController.softDeleteManyChat_message(softDeleteManyChat_messageUsecase);
const bulkInsertChat_message = Chat_messageController.bulkInsertChat_message(bulkInsertChat_messageUsecase);
const bulkUpdateChat_message = Chat_messageController.bulkUpdateChat_message(bulkUpdateChat_messageUsecase);
const deleteManyChat_message = Chat_messageController.deleteManyChat_message(deleteManyChat_messageUsecase);
const softDeleteChat_message = Chat_messageController.softDeleteChat_message(softDeleteChat_messageUsecase);
const partialUpdateChat_message = Chat_messageController.partialUpdateChat_message(partialUpdateChat_messageUsecase);
const updateChat_message = Chat_messageController.updateChat_message(updateChat_messageUsecase);
const getChat_messageById = Chat_messageController.getChat_message(getChat_messageUsecase);
const deleteChat_message = Chat_messageController.deleteChat_message(deleteChat_messageUsecase);

module.exports = {
  addChat_message,
  findAllChat_message,
  getChat_messageCount,
  softDeleteManyChat_message,
  bulkInsertChat_message,
  bulkUpdateChat_message,
  deleteManyChat_message,
  softDeleteChat_message,
  partialUpdateChat_message,
  updateChat_message,
  getChat_messageById,
  deleteChat_message,
};