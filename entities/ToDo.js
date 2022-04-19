module.exports = (ToDo) => {

  let newToDo = { 
    id: ToDo.id,
    name: ToDo.name,
    description: ToDo.description,
    date: ToDo.date,
    dueDate: ToDo.dueDate,
    isCompleted: ToDo.isCompleted,
    isActive: ToDo.isActive,
    createdAt: ToDo.createdAt,
    updatedAt: ToDo.updatedAt,
    addedBy: ToDo.addedBy,
    updatedBy: ToDo.updatedBy,
    isDeleted: ToDo.isDeleted,
  };

  // remove undefined values
  if (newToDo.id){
    Object.keys(newToDo).forEach(key =>{
      if (newToDo[key] === undefined) return newToDo[key] = null;
    });
  } else {
    Object.keys(newToDo).forEach(key => newToDo[key] === undefined && delete newToDo[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newToDo) => {
   *   if (!newToDo.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newToDo) 
   */
  return Object.freeze(newToDo);
};
