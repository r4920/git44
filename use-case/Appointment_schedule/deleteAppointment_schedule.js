
/**
 *deleteAppointment_schedule.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Appointment_schedule. {status, message, data}
 */
const deleteAppointment_schedule = ({ Appointment_scheduleDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedAppointment_schedule = await Appointment_scheduleDb.destroy(query);
  if (!deletedAppointment_schedule || deletedAppointment_schedule.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedAppointment_schedule[0] });
};

module.exports = deleteAppointment_schedule;
