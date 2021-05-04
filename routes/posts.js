const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/:id', ensureAuth, postsController.getPost)

router.post('/createPost', postsController.createPost)

router.delete('/deletePost/:id', postsController.deletePost)

module.exports = router
