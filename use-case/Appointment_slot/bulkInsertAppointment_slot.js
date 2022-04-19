
/**
 *bulkInsertAppointment_slot.js
 */

const  Appointment_slotEntity = require('../../entities/Appointment_slot');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Appointment_slots. {status, message, data}
 */
const bulkInsertAppointment_slot = ({
  Appointment_slotDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let appointment_slotEntities = dataToCreate.map(item => Appointment_slotEntity(item));
  let createdAppointment_slot = await Appointment_slotDb.createMany(appointment_slotEntities);
  return response.success({ data:{ count: createdAppointment_slot.length } });
};
module.exports = bulkInsertAppointment_slot;