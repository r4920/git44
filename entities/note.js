module.exports = (note) => {

  let newNote = { 
    id: note.id,
    _id: note._id,
    encounterId: note.encounterId,
    provider: note.provider,
    text: note.text,
    isActive: note.isActive,
    createdAt: note.createdAt,
    updatedAt: note.updatedAt,
    addedBy: note.addedBy,
    updatedBy: note.updatedBy,
    isDeleted: note.isDeleted,
  };

  // remove undefined values
  if (newNote.id){
    Object.keys(newNote).forEach(key =>{
      if (newNote[key] === undefined) return newNote[key] = null;
    });
  } else {
    Object.keys(newNote).forEach(key => newNote[key] === undefined && delete newNote[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newNote) => {
   *   if (!newNote.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newNote) 
   */
  return Object.freeze(newNote);
};
