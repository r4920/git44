const CommentDb = require('../../../data-access/CommentDb');
const CommentSchema = require('../../../validation/schema/Comment');
const createValidation = require('../../../validation')(CommentSchema.createSchema);
const updateValidation = require('../../../validation')(CommentSchema.updateSchema);
const filterValidation = require('../../../validation')(CommentSchema.filterValidationSchema);
const CommentController = require('./Comment');

// use-cases imports with dependency injection
const addCommentUsecase = require('../../../use-case/Comment/addComment')({
  CommentDb,
  createValidation 
});
const findAllCommentUsecase = require('../../../use-case/Comment/findAllComment')({
  CommentDb,
  filterValidation
});
const getCommentCountUsecase = require('../../../use-case/Comment/getCommentCount')({
  CommentDb,
  filterValidation
});
const softDeleteManyCommentUsecase = require('../../../use-case/Comment/softDeleteManyComment')({ CommentDb });
const bulkInsertCommentUsecase = require('../../../use-case/Comment/bulkInsertComment')({ CommentDb });
const bulkUpdateCommentUsecase = require('../../../use-case/Comment/bulkUpdateComment')({ CommentDb });
const deleteManyCommentUsecase = require('../../../use-case/Comment/deleteManyComment')({ CommentDb });
const softDeleteCommentUsecase = require('../../../use-case/Comment/softDeleteComment')({ CommentDb });
const partialUpdateCommentUsecase = require('../../../use-case/Comment/partialUpdateComment')({
  CommentDb,
  updateValidation
});
const updateCommentUsecase = require('../../../use-case/Comment/updateComment')({
  CommentDb,
  updateValidation 
});
const getCommentUsecase = require('../../../use-case/Comment/getComment')({
  CommentDb,
  filterValidation
});
const deleteCommentUsecase = require('../../../use-case/Comment/deleteComment')({ CommentDb });

// controller methods mapping
const addComment = CommentController.addComment(addCommentUsecase);
const findAllComment = CommentController.findAllComment(findAllCommentUsecase);
const getCommentCount = CommentController.getCommentCount(getCommentCountUsecase);
const softDeleteManyComment = CommentController.softDeleteManyComment(softDeleteManyCommentUsecase);
const bulkInsertComment = CommentController.bulkInsertComment(bulkInsertCommentUsecase);
const bulkUpdateComment = CommentController.bulkUpdateComment(bulkUpdateCommentUsecase);
const deleteManyComment = CommentController.deleteManyComment(deleteManyCommentUsecase);
const softDeleteComment = CommentController.softDeleteComment(softDeleteCommentUsecase);
const partialUpdateComment = CommentController.partialUpdateComment(partialUpdateCommentUsecase);
const updateComment = CommentController.updateComment(updateCommentUsecase);
const getCommentById = CommentController.getComment(getCommentUsecase);
const deleteComment = CommentController.deleteComment(deleteCommentUsecase);

module.exports = {
  addComment,
  findAllComment,
  getCommentCount,
  softDeleteManyComment,
  bulkInsertComment,
  bulkUpdateComment,
  deleteManyComment,
  softDeleteComment,
  partialUpdateComment,
  updateComment,
  getCommentById,
  deleteComment,
};