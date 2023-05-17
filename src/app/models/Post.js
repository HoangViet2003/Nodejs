const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-generator');
// const uniqueValidator = require("mongoose-unique-validator");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

// mongoose.plugin(slug);
// mongoose.plugin(uniqueValidator);


const Post = new Schema(
  {
    title: { type: String, required: true, maxLength: 255 },
    description: { type: String },
    image: { type: String },
    // slug: { type: String, slug: "title", unique: true, slug_padding_size: 4 },
  },
  {
    timestamps: true,
  }
);

Post.plugin(mongooseSlugPlugin, { tmpl: "<%=title%>" }); 

module.exports = mongoose.model('Post', Post);
