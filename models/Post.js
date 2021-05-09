const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Post', PostSchema)
