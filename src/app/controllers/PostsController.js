const { post } = require("../../routes/news");
const Post = require("../models/Post");
const { mutipleMongooseToObject,mongooseToObject } = require("../../util/mongoose");

class PostsController {
  show(req, res, next) {
    Post.findOne({ slug: req.params.slug })
      .then((post) =>
        res.render("posts/show", { post: mongooseToObject(post) })
      )
      .catch(next);
  }

  create(req, res, next) {
    res.render("posts/create");
  }

  store(req, res, next) {


    const  post = new Post(req.body);
    // post.slug = stringtoSlug(post.title);
    post.save()
      .then(() => res.redirect("/"))
      .catch(error => {
        console.log(error)
      })
  }
}

  

module.exports = new PostsController();
