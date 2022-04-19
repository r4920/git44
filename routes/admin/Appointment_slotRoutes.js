const express = require('express');
const router = express.Router();
const Appointment_slotController = require('../../controller/admin/Appointment_slot');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/appointment_slot/create').post(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.addAppointment_slot);
router.route('/admin/appointment_slot/list').post(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.findAllAppointment_slot);

router.route('/admin/appointment_slot/count').post(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.getAppointment_slotCount);
router.route('/admin/appointment_slot/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.softDeleteManyAppointment_slot);
router.route('/admin/appointment_slot/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.bulkInsertAppointment_slot);

router.route('/admin/appointment_slot/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.bulkUpdateAppointment_slot); 
router.route('/admin/appointment_slot/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.deleteManyAppointment_slot);
router.route('/admin/appointment_slot/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.softDeleteAppointment_slot);
router.route('/admin/appointment_slot/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.partialUpdateAppointment_slot);   

router.route('/admin/appointment_slot/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.updateAppointment_slot);   
router.route('/admin/appointment_slot/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.getAppointment_slotById);

router.route('/admin/appointment_slot/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,Appointment_slotController.deleteAppointment_slot);

module.exports = router;
