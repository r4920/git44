/**
 *updateAppointment_slot.js
 */

const  Appointment_slotEntity = require('../../entities/Appointment_slot');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Appointment_slot. {status, message, data}
 */
const updateAppointment_slot = ({
  Appointment_slotDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedAppointment_slot = Appointment_slotEntity(dataToUpdate);
  updatedAppointment_slot = await Appointment_slotDb.update(query,updatedAppointment_slot);
  if (!updatedAppointment_slot || updatedAppointment_slot.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedAppointment_slot[0] });
};
module.exports = updateAppointment_slot;