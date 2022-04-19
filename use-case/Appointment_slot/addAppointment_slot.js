
/**
 *addAppointment_slot.js
 */

const  Appointment_slotEntity = require('../../entities/Appointment_slot');
const response = require('../../utils/response');

/**
 * @description : create new record of Appointment_slot in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addAppointment_slot = ({
  Appointment_slotDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdAppointment_slot  = Appointment_slotEntity(dataToCreate);
  createdAppointment_slot = await Appointment_slotDb.createOne(createdAppointment_slot );
  return response.success({ data:createdAppointment_slot });
};
module.exports = addAppointment_slot;