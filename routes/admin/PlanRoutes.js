const express = require('express');
const router = express.Router();
const PlanController = require('../../controller/admin/Plan');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/plan/create').post(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.addPlan);
router.route('/admin/plan/list').post(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.findAllPlan);

router.route('/admin/plan/count').post(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.getPlanCount);
router.route('/admin/plan/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.softDeleteManyPlan);
router.route('/admin/plan/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.bulkInsertPlan);

router.route('/admin/plan/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.bulkUpdatePlan); 
router.route('/admin/plan/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.deleteManyPlan);
router.route('/admin/plan/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.softDeletePlan);
router.route('/admin/plan/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.partialUpdatePlan);   

router.route('/admin/plan/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.updatePlan);   
router.route('/admin/plan/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.getPlanById);

router.route('/admin/plan/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,PlanController.deletePlan);

module.exports = router;
