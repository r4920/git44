/**
 *updateAppointment_schedule.js
 */

const  Appointment_scheduleEntity = require('../../entities/Appointment_schedule');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Appointment_schedule. {status, message, data}
 */
const updateAppointment_schedule = ({
  Appointment_scheduleDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedAppointment_schedule = Appointment_scheduleEntity(dataToUpdate);
  updatedAppointment_schedule = await Appointment_scheduleDb.update(query,updatedAppointment_schedule);
  if (!updatedAppointment_schedule || updatedAppointment_schedule.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedAppointment_schedule[0] });
};
module.exports = updateAppointment_schedule;