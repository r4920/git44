module.exports = (departments) => {

  let newDepartments = { 
    id: departments.id,
    name: departments.name,
    code: departments.code,
    enterprises: departments.enterprises,
    email: departments.email,
    phone: departments.phone,
    website: departments.website,
    address: departments.address,
    isActive: departments.isActive,
    createdAt: departments.createdAt,
    updatedAt: departments.updatedAt,
    addedBy: departments.addedBy,
    updatedBy: departments.updatedBy,
    isDeleted: departments.isDeleted,
  };

  // remove undefined values
  if (newDepartments.id){
    Object.keys(newDepartments).forEach(key =>{
      if (newDepartments[key] === undefined) return newDepartments[key] = null;
    });
  } else {
    Object.keys(newDepartments).forEach(key => newDepartments[key] === undefined && delete newDepartments[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newDepartments) => {
   *   if (!newDepartments.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newDepartments) 
   */
  return Object.freeze(newDepartments);
};
