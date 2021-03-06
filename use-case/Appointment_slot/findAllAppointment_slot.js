/**
 *findAllAppointment_slot.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Appointment_slot(s). {status, message, data}
 */
const findAllAppointment_slot = ({
  Appointment_slotDb,filterValidation 
}) => async (params,req,res) => {
  let {
    options, query, isCountOnly 
  } = params;
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  if (isCountOnly){
    let count = await Appointment_slotDb.count(query);
    return response.success({ data: { count } });  
  }
  else {
    let foundAppointment_slot = await Appointment_slotDb.paginate(query,options);
    if (!foundAppointment_slot){
      return response.recordNotFound();
    }
    return response.success({ data:foundAppointment_slot });
  }
};
module.exports = findAllAppointment_slot;