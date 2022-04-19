const userDb = require('../../../../data-access/userDb');
const orderItemDb = require('../../../../data-access/orderItemDb');
const patientDb = require('../../../../data-access/patientDb');
const noteDb = require('../../../../data-access/noteDb');
const orderDb = require('../../../../data-access/orderDb');
const enterpriseDb = require('../../../../data-access/enterpriseDb');
const medicationDb = require('../../../../data-access/medicationDb');
const departmentsDb = require('../../../../data-access/departmentsDb');
const encounterDb = require('../../../../data-access/encounterDb');
const CustomerDb = require('../../../../data-access/CustomerDb');
const TaskDb = require('../../../../data-access/TaskDb');
const CommentDb = require('../../../../data-access/CommentDb');
const PlanDb = require('../../../../data-access/PlanDb');
const Chat_groupDb = require('../../../../data-access/Chat_groupDb');
const Chat_messageDb = require('../../../../data-access/Chat_messageDb');
const ToDoDb = require('../../../../data-access/ToDoDb');
const Appointment_scheduleDb = require('../../../../data-access/Appointment_scheduleDb');
const Appointment_slotDb = require('../../../../data-access/Appointment_slotDb');
const EventDb = require('../../../../data-access/EventDb');
const MasterDb = require('../../../../data-access/MasterDb');
const BlogDb = require('../../../../data-access/BlogDb');
const userAuthSettingsDb = require('../../../../data-access/userAuthSettingsDb');
const userTokensDb = require('../../../../data-access/userTokensDb');
const userRoleDb = require('../../../../data-access/userRoleDb');
const userSchema = require('../../../../validation/schema/user');
const createValidation = require('../../../../validation')(userSchema.createSchema);
const updateValidation = require('../../../../validation')(userSchema.updateSchema);
const filterValidation = require('../../../../validation')(userSchema.filterValidationSchema);
const userController = require('./user');

// use-cases imports with dependency injection
const addUserUsecase = require('../../../../use-case/user/addUser')({
  userDb,
  createValidation 
});
const findAllUserUsecase = require('../../../../use-case/user/findAllUser')({
  userDb,
  filterValidation
});
const getUserCountUsecase = require('../../../../use-case/user/getUserCount')({
  userDb,
  filterValidation
});
const softDeleteManyUserUsecase = require('../../../../use-case/user/softDeleteManyUser')({
  userDb,
  orderItemDb,
  patientDb,
  noteDb,
  orderDb,
  enterpriseDb,
  medicationDb,
  departmentsDb,
  encounterDb,
  CustomerDb,
  TaskDb,
  CommentDb,
  PlanDb,
  Chat_groupDb,
  Chat_messageDb,
  ToDoDb,
  Appointment_scheduleDb,
  Appointment_slotDb,
  EventDb,
  MasterDb,
  BlogDb,
  userAuthSettingsDb,
  userTokensDb,
  userRoleDb
});
const bulkInsertUserUsecase = require('../../../../use-case/user/bulkInsertUser')({ userDb });
const bulkUpdateUserUsecase = require('../../../../use-case/user/bulkUpdateUser')({ userDb });
const deleteManyUserUsecase = require('../../../../use-case/user/deleteManyUser')({
  userDb,
  orderItemDb,
  patientDb,
  noteDb,
  orderDb,
  enterpriseDb,
  medicationDb,
  departmentsDb,
  encounterDb,
  CustomerDb,
  TaskDb,
  CommentDb,
  PlanDb,
  Chat_groupDb,
  Chat_messageDb,
  ToDoDb,
  Appointment_scheduleDb,
  Appointment_slotDb,
  EventDb,
  MasterDb,
  BlogDb,
  userAuthSettingsDb,
  userTokensDb,
  userRoleDb
});
const softDeleteUserUsecase = require('../../../../use-case/user/softDeleteUser')({
  userDb,
  orderItemDb,
  patientDb,
  noteDb,
  orderDb,
  enterpriseDb,
  medicationDb,
  departmentsDb,
  encounterDb,
  CustomerDb,
  TaskDb,
  CommentDb,
  PlanDb,
  Chat_groupDb,
  Chat_messageDb,
  ToDoDb,
  Appointment_scheduleDb,
  Appointment_slotDb,
  EventDb,
  MasterDb,
  BlogDb,
  userAuthSettingsDb,
  userTokensDb,
  userRoleDb
});
const partialUpdateUserUsecase = require('../../../../use-case/user/partialUpdateUser')({
  userDb,
  updateValidation
});
const updateUserUsecase = require('../../../../use-case/user/updateUser')({
  userDb,
  updateValidation 
});
const getUserUsecase = require('../../../../use-case/user/getUser')({
  userDb,
  filterValidation
});
const deleteUserUsecase = require('../../../../use-case/user/deleteUser')({
  userDb,
  orderItemDb,
  patientDb,
  noteDb,
  orderDb,
  enterpriseDb,
  medicationDb,
  departmentsDb,
  encounterDb,
  CustomerDb,
  TaskDb,
  CommentDb,
  PlanDb,
  Chat_groupDb,
  Chat_messageDb,
  ToDoDb,
  Appointment_scheduleDb,
  Appointment_slotDb,
  EventDb,
  MasterDb,
  BlogDb,
  userAuthSettingsDb,
  userTokensDb,
  userRoleDb
});
const changePasswordUsecase = require('../../../../use-case/user/changePassword')({ userDb });
const updateProfileUsecase = require('../../../../use-case/user/updateProfile')({
  userDb,
  updateValidation
});

// controller methods mapping
const addUser = userController.addUser(addUserUsecase);
const findAllUser = userController.findAllUser(findAllUserUsecase);
const getUserCount = userController.getUserCount(getUserCountUsecase);
const softDeleteManyUser = userController.softDeleteManyUser(softDeleteManyUserUsecase);
const bulkInsertUser = userController.bulkInsertUser(bulkInsertUserUsecase);
const bulkUpdateUser = userController.bulkUpdateUser(bulkUpdateUserUsecase);
const deleteManyUser = userController.deleteManyUser(deleteManyUserUsecase);
const softDeleteUser = userController.softDeleteUser(softDeleteUserUsecase);
const partialUpdateUser = userController.partialUpdateUser(partialUpdateUserUsecase);
const updateUser = userController.updateUser(updateUserUsecase);
const getUserById = userController.getUser(getUserUsecase);
const deleteUser = userController.deleteUser(deleteUserUsecase);
const changePassword = userController.changePassword(changePasswordUsecase);
const updateProfile = userController.updateProfile(updateProfileUsecase);
const getLoggedInUserInfo = userController.getLoggedInUserInfo(getUserUsecase);

module.exports = {
  addUser,
  findAllUser,
  getUserCount,
  softDeleteManyUser,
  bulkInsertUser,
  bulkUpdateUser,
  deleteManyUser,
  softDeleteUser,
  partialUpdateUser,
  updateUser,
  getUserById,
  deleteUser,
  changePassword,
  updateProfile,
  getLoggedInUserInfo,
};