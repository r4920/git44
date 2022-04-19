module.exports = (Task) => {

  let newTask = { 
    id: Task.id,
    title: Task.title,
    description: Task.description,
    attachments: Task.attachments,
    status: Task.status,
    date: Task.date,
    dueDate: Task.dueDate,
    completedBy: Task.completedBy,
    completedAt: Task.completedAt,
    isActive: Task.isActive,
    createdAt: Task.createdAt,
    updatedAt: Task.updatedAt,
    updatedBy: Task.updatedBy,
    addedBy: Task.addedBy,
    isDeleted: Task.isDeleted,
  };

  // remove undefined values
  if (newTask.id){
    Object.keys(newTask).forEach(key =>{
      if (newTask[key] === undefined) return newTask[key] = null;
    });
  } else {
    Object.keys(newTask).forEach(key => newTask[key] === undefined && delete newTask[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newTask) => {
   *   if (!newTask.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newTask) 
   */
  return Object.freeze(newTask);
};
