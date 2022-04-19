/**
 *softDeleteAppointment_schedule.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Appointment_schedule. {status, message, data}
 */
const softDeleteAppointment_schedule = ({ Appointment_scheduleDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedAppointment_schedule = await Appointment_scheduleDb.update(query, dataToUpdate);
  if (!updatedAppointment_schedule || updatedAppointment_schedule.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedAppointment_schedule[0] });
};
module.exports = softDeleteAppointment_schedule;
