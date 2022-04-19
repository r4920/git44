/**
 *getAppointment_schedule.js
 */
 
const response = require('../../utils/response');

/**
 * @description : find record from database by id;
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Appointment_schedule. {status, message, data}
 */
const getAppointment_schedule = ({
  Appointment_scheduleDb, filterValidation 
}) => async (params,req,res) => {
  let {
    query, options  
  } = params;
  const validateRequest = await filterValidation(options);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let foundAppointment_schedule = await Appointment_scheduleDb.findOne(query, options);
  if (!foundAppointment_schedule){
    return response.recordNotFound();
  }
  return response.success({ data:foundAppointment_schedule });
};
module.exports = getAppointment_schedule;