/**
 *bulkUpdateAppointment_schedule.js
 */

const response = require('../../utils/response');

/**
 * @description : update multiple records of Appointment_schedule with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateAppointment_schedule = ({ Appointment_scheduleDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedAppointment_schedule = (await Appointment_scheduleDb.update(query,dataToUpdate)).length;
  return response.success({ data:{ count: updatedAppointment_schedule } });
};
module.exports = bulkUpdateAppointment_schedule;