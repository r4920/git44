module.exports = (Comment) => {

  let newComment = { 
    id: Comment.id,
    comment: Comment.comment,
    upvoteCount: Comment.upvoteCount,
    downVoteCount: Comment.downVoteCount,
    commentTime: Comment.commentTime,
    parentItem: Comment.parentItem,
    isActive: Comment.isActive,
    createdAt: Comment.createdAt,
    updatedAt: Comment.updatedAt,
    updatedBy: Comment.updatedBy,
    addedBy: Comment.addedBy,
    isDeleted: Comment.isDeleted,
  };

  // remove undefined values
  if (newComment.id){
    Object.keys(newComment).forEach(key =>{
      if (newComment[key] === undefined) return newComment[key] = null;
    });
  } else {
    Object.keys(newComment).forEach(key => newComment[key] === undefined && delete newComment[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newComment) => {
   *   if (!newComment.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newComment) 
   */
  return Object.freeze(newComment);
};
