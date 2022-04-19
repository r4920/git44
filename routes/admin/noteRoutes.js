const express = require('express');
const router = express.Router();
const noteController = require('../../controller/admin/note');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/note/create').post(auth(PLATFORM.ADMIN),checkRolePermission,noteController.addNote);
router.route('/admin/note/list').post(auth(PLATFORM.ADMIN),checkRolePermission,noteController.findAllNote);

router.route('/admin/note/count').post(auth(PLATFORM.ADMIN),checkRolePermission,noteController.getNoteCount);
router.route('/admin/note/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,noteController.softDeleteManyNote);
router.route('/admin/note/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,noteController.bulkInsertNote);

router.route('/admin/note/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,noteController.bulkUpdateNote); 
router.route('/admin/note/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,noteController.deleteManyNote);
router.route('/admin/note/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,noteController.softDeleteNote);
router.route('/admin/note/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,noteController.partialUpdateNote);   

router.route('/admin/note/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,noteController.updateNote);   
router.route('/admin/note/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,noteController.getNoteById);

router.route('/admin/note/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,noteController.deleteNote);

module.exports = router;
