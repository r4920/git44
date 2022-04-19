module.exports = (encounter) => {

  let newEncounter = { 
    id: encounter.id,
    name: encounter.name,
    date: encounter.date,
    description: encounter.description,
    patientId: encounter.patientId,
    createdAt: encounter.createdAt,
    updatedAt: encounter.updatedAt,
    addedBy: encounter.addedBy,
    updatedBy: encounter.updatedBy,
    isDeleted: encounter.isDeleted,
    isActive: encounter.isActive,
  };

  // remove undefined values
  if (newEncounter.id){
    Object.keys(newEncounter).forEach(key =>{
      if (newEncounter[key] === undefined) return newEncounter[key] = null;
    });
  } else {
    Object.keys(newEncounter).forEach(key => newEncounter[key] === undefined && delete newEncounter[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newEncounter) => {
   *   if (!newEncounter.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newEncounter) 
   */
  return Object.freeze(newEncounter);
};
