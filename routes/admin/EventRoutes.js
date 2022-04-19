const express = require('express');
const router = express.Router();
const EventController = require('../../controller/admin/Event');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/event/create').post(auth(PLATFORM.ADMIN),checkRolePermission,EventController.addEvent);
router.route('/admin/event/list').post(auth(PLATFORM.ADMIN),checkRolePermission,EventController.findAllEvent);

router.route('/admin/event/count').post(auth(PLATFORM.ADMIN),checkRolePermission,EventController.getEventCount);
router.route('/admin/event/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,EventController.softDeleteManyEvent);
router.route('/admin/event/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,EventController.bulkInsertEvent);

router.route('/admin/event/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,EventController.bulkUpdateEvent); 
router.route('/admin/event/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,EventController.deleteManyEvent);
router.route('/admin/event/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,EventController.softDeleteEvent);
router.route('/admin/event/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,EventController.partialUpdateEvent);   

router.route('/admin/event/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,EventController.updateEvent);   
router.route('/admin/event/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,EventController.getEventById);

router.route('/admin/event/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,EventController.deleteEvent);

module.exports = router;
