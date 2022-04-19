module.exports = (Chat_group) => {

  let newChat_group = { 
    id: Chat_group.id,
    name: Chat_group.name,
    code: Chat_group.code,
    member: Chat_group.member,
    admin: Chat_group.admin,
    isActive: Chat_group.isActive,
    createdAt: Chat_group.createdAt,
    updatedAt: Chat_group.updatedAt,
    updatedBy: Chat_group.updatedBy,
    addedBy: Chat_group.addedBy,
    isDeleted: Chat_group.isDeleted,
  };

  // remove undefined values
  if (newChat_group.id){
    Object.keys(newChat_group).forEach(key =>{
      if (newChat_group[key] === undefined) return newChat_group[key] = null;
    });
  } else {
    Object.keys(newChat_group).forEach(key => newChat_group[key] === undefined && delete newChat_group[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newChat_group) => {
   *   if (!newChat_group.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newChat_group) 
   */
  return Object.freeze(newChat_group);
};
