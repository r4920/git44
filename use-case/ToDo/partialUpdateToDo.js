/**
 *partialUpdateToDo.js
 */

const  ToDoEntity = require('../../entities/ToDo');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated ToDo. {status, message, data}
 */
const partialUpdateToDo = ({ ToDoDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedToDo = await ToDoDb.update(query,dataToUpdate);
  if (!updatedToDo || updatedToDo.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedToDo[0] });
};
module.exports = partialUpdateToDo;