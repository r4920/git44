/**
 *getAppointment_slot.js
 */
 
const response = require('../../utils/response');

/**
 * @description : find record from database by id;
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Appointment_slot. {status, message, data}
 */
const getAppointment_slot = ({
  Appointment_slotDb, filterValidation 
}) => async (params,req,res) => {
  let {
    query, options  
  } = params;
  const validateRequest = await filterValidation(options);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let foundAppointment_slot = await Appointment_slotDb.findOne(query, options);
  if (!foundAppointment_slot){
    return response.recordNotFound();
  }
  return response.success({ data:foundAppointment_slot });
};
module.exports = getAppointment_slot;