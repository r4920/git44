module.exports = (Master) => {

  let newMaster = { 
    id: Master.id,
    name: Master.name,
    slug: Master.slug,
    code: Master.code,
    group: Master.group,
    description: Master.description,
    sequence: Master.sequence,
    image: Master.image,
    parentId: Master.parentId,
    parentCode: Master.parentCode,
    isDefault: Master.isDefault,
    isDeleted: Master.isDeleted,
    isActive: Master.isActive,
    createdAt: Master.createdAt,
    updatedAt: Master.updatedAt,
    updatedBy: Master.updatedBy,
    addedBy: Master.addedBy,
  };

  // remove undefined values
  if (newMaster.id){
    Object.keys(newMaster).forEach(key =>{
      if (newMaster[key] === undefined) return newMaster[key] = null;
    });
  } else {
    Object.keys(newMaster).forEach(key => newMaster[key] === undefined && delete newMaster[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newMaster) => {
   *   if (!newMaster.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newMaster) 
   */
  return Object.freeze(newMaster);
};
