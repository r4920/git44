/**
 *partialUpdateAppointment_slot.js
 */

const  Appointment_slotEntity = require('../../entities/Appointment_slot');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Appointment_slot. {status, message, data}
 */
const partialUpdateAppointment_slot = ({ Appointment_slotDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedAppointment_slot = await Appointment_slotDb.update(query,dataToUpdate);
  if (!updatedAppointment_slot || updatedAppointment_slot.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedAppointment_slot[0] });
};
module.exports = partialUpdateAppointment_slot;