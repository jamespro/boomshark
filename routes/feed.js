const express = require('express')
const router = express.Router()
const feedController = require('../controllers/feed') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, feedController.getPost)


//router.delete('/deletePost', profileController.deletePost)

module.exports = router
