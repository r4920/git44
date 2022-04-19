const noteDb = require('../../../../data-access/noteDb');
const noteSchema = require('../../../../validation/schema/note');
const createValidation = require('../../../../validation')(noteSchema.createSchema);
const updateValidation = require('../../../../validation')(noteSchema.updateSchema);
const filterValidation = require('../../../../validation')(noteSchema.filterValidationSchema);
const noteController = require('./note');

// use-cases imports with dependency injection
const addNoteUsecase = require('../../../../use-case/note/addNote')({
  noteDb,
  createValidation 
});
const findAllNoteUsecase = require('../../../../use-case/note/findAllNote')({
  noteDb,
  filterValidation
});
const getNoteCountUsecase = require('../../../../use-case/note/getNoteCount')({
  noteDb,
  filterValidation
});
const softDeleteManyNoteUsecase = require('../../../../use-case/note/softDeleteManyNote')({ noteDb });
const bulkInsertNoteUsecase = require('../../../../use-case/note/bulkInsertNote')({ noteDb });
const bulkUpdateNoteUsecase = require('../../../../use-case/note/bulkUpdateNote')({ noteDb });
const deleteManyNoteUsecase = require('../../../../use-case/note/deleteManyNote')({ noteDb });
const softDeleteNoteUsecase = require('../../../../use-case/note/softDeleteNote')({ noteDb });
const partialUpdateNoteUsecase = require('../../../../use-case/note/partialUpdateNote')({
  noteDb,
  updateValidation
});
const updateNoteUsecase = require('../../../../use-case/note/updateNote')({
  noteDb,
  updateValidation 
});
const getNoteUsecase = require('../../../../use-case/note/getNote')({
  noteDb,
  filterValidation
});
const deleteNoteUsecase = require('../../../../use-case/note/deleteNote')({ noteDb });

// controller methods mapping
const addNote = noteController.addNote(addNoteUsecase);
const findAllNote = noteController.findAllNote(findAllNoteUsecase);
const getNoteCount = noteController.getNoteCount(getNoteCountUsecase);
const softDeleteManyNote = noteController.softDeleteManyNote(softDeleteManyNoteUsecase);
const bulkInsertNote = noteController.bulkInsertNote(bulkInsertNoteUsecase);
const bulkUpdateNote = noteController.bulkUpdateNote(bulkUpdateNoteUsecase);
const deleteManyNote = noteController.deleteManyNote(deleteManyNoteUsecase);
const softDeleteNote = noteController.softDeleteNote(softDeleteNoteUsecase);
const partialUpdateNote = noteController.partialUpdateNote(partialUpdateNoteUsecase);
const updateNote = noteController.updateNote(updateNoteUsecase);
const getNoteById = noteController.getNote(getNoteUsecase);
const deleteNote = noteController.deleteNote(deleteNoteUsecase);

module.exports = {
  addNote,
  findAllNote,
  getNoteCount,
  softDeleteManyNote,
  bulkInsertNote,
  bulkUpdateNote,
  deleteManyNote,
  softDeleteNote,
  partialUpdateNote,
  updateNote,
  getNoteById,
  deleteNote,
};