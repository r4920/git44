module.exports = (Blog) => {

  let newBlog = { 
    id: Blog.id,
    title: Blog.title,
    alternativeHeadline: Blog.alternativeHeadline,
    image: Blog.image,
    publishDate: Blog.publishDate,
    authorName: Blog.authorName,
    authorImage: Blog.authorImage,
    authorEmail: Blog.authorEmail,
    publisherName: Blog.publisherName,
    publisherUrl: Blog.publisherUrl,
    publisherLogo: Blog.publisherLogo,
    keywords: Blog.keywords,
    articleSection: Blog.articleSection,
    articleBody: Blog.articleBody,
    description: Blog.description,
    slug: Blog.slug,
    url: Blog.url,
    isDraft: Blog.isDraft,
    isDeleted: Blog.isDeleted,
    isActive: Blog.isActive,
    createdAt: Blog.createdAt,
    updatedAt: Blog.updatedAt,
    updatedBy: Blog.updatedBy,
    addedBy: Blog.addedBy,
  };

  // remove undefined values
  if (newBlog.id){
    Object.keys(newBlog).forEach(key =>{
      if (newBlog[key] === undefined) return newBlog[key] = null;
    });
  } else {
    Object.keys(newBlog).forEach(key => newBlog[key] === undefined && delete newBlog[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newBlog) => {
   *   if (!newBlog.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newBlog) 
   */
  return Object.freeze(newBlog);
};
