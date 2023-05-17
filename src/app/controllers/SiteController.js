const { post } = require('../../routes/news');
const Post = require('../models/Post');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  async index(req, res) {
    try {
      const posts = await Post.find({}).then(posts => {
         
         res.render(
           "homepage",

           { posts: mutipleMongooseToObject(posts) }
         );
      });
      // posts.map(post => post.toObject())
      // // res.json(posts);
     
    } catch (err) {
      res.status(400).json({ error: "ERROR!!!" });
    }
  }
  
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController;