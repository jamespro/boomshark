const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Post', PostSchema)
