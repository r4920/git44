const express = require('express');
const router = express.Router();
const MasterController = require('../../../controller/device/v1/Master');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/master/create').post(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.addMaster);
router.route('/device/api/v1/master/list').post(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.findAllMaster);

router.route('/device/api/v1/master/count').post(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.getMasterCount);
router.route('/device/api/v1/master/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.softDeleteManyMaster);
router.route('/device/api/v1/master/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.bulkInsertMaster);

router.route('/device/api/v1/master/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.bulkUpdateMaster); 
router.route('/device/api/v1/master/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.deleteManyMaster);
router.route('/device/api/v1/master/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.softDeleteMaster);
router.route('/device/api/v1/master/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.partialUpdateMaster);   

router.route('/device/api/v1/master/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.updateMaster);   
router.route('/device/api/v1/master/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.getMasterById);

router.route('/device/api/v1/master/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,MasterController.deleteMaster);

module.exports = router;
