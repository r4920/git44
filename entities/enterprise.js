module.exports = (enterprise) => {

  let newEnterprise = { 
    id: enterprise.id,
    name: enterprise.name,
    email: enterprise.email,
    phone: enterprise.phone,
    code: enterprise.code,
    address: enterprise.address,
    description: enterprise.description,
    website: enterprise.website,
    isActive: enterprise.isActive,
    createdAt: enterprise.createdAt,
    updatedAt: enterprise.updatedAt,
    addedBy: enterprise.addedBy,
    updatedBy: enterprise.updatedBy,
    isDeleted: enterprise.isDeleted,
  };

  // remove undefined values
  if (newEnterprise.id){
    Object.keys(newEnterprise).forEach(key =>{
      if (newEnterprise[key] === undefined) return newEnterprise[key] = null;
    });
  } else {
    Object.keys(newEnterprise).forEach(key => newEnterprise[key] === undefined && delete newEnterprise[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newEnterprise) => {
   *   if (!newEnterprise.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newEnterprise) 
   */
  return Object.freeze(newEnterprise);
};
