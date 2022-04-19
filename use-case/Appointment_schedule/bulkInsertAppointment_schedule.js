
/**
 *bulkInsertAppointment_schedule.js
 */

const  Appointment_scheduleEntity = require('../../entities/Appointment_schedule');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Appointment_schedules. {status, message, data}
 */
const bulkInsertAppointment_schedule = ({
  Appointment_scheduleDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let appointment_scheduleEntities = dataToCreate.map(item => Appointment_scheduleEntity(item));
  let createdAppointment_schedule = await Appointment_scheduleDb.createMany(appointment_scheduleEntities);
  return response.success({ data:{ count: createdAppointment_schedule.length } });
};
module.exports = bulkInsertAppointment_schedule;