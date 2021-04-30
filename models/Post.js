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
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Post', PostSchema)
