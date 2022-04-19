/**
 *partialUpdateAppointment_schedule.js
 */

const  Appointment_scheduleEntity = require('../../entities/Appointment_schedule');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Appointment_schedule. {status, message, data}
 */
const partialUpdateAppointment_schedule = ({ Appointment_scheduleDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedAppointment_schedule = await Appointment_scheduleDb.update(query,dataToUpdate);
  if (!updatedAppointment_schedule || updatedAppointment_schedule.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedAppointment_schedule[0] });
};
module.exports = partialUpdateAppointment_schedule;