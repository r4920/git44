const express = require('express');
const router = express.Router();
const Appointment_scheduleController = require('../../../controller/device/v1/Appointment_schedule');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/appointment_schedule/create').post(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.addAppointment_schedule);
router.route('/device/api/v1/appointment_schedule/list').post(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.findAllAppointment_schedule);

router.route('/device/api/v1/appointment_schedule/count').post(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.getAppointment_scheduleCount);
router.route('/device/api/v1/appointment_schedule/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.softDeleteManyAppointment_schedule);
router.route('/device/api/v1/appointment_schedule/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.bulkInsertAppointment_schedule);

router.route('/device/api/v1/appointment_schedule/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.bulkUpdateAppointment_schedule); 
router.route('/device/api/v1/appointment_schedule/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.deleteManyAppointment_schedule);
router.route('/device/api/v1/appointment_schedule/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.softDeleteAppointment_schedule);
router.route('/device/api/v1/appointment_schedule/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.partialUpdateAppointment_schedule);   

router.route('/device/api/v1/appointment_schedule/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.updateAppointment_schedule);   
router.route('/device/api/v1/appointment_schedule/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.getAppointment_scheduleById);

router.route('/device/api/v1/appointment_schedule/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,Appointment_scheduleController.deleteAppointment_schedule);

module.exports = router;
