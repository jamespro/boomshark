const express = require('express')
const router = express.Router()
const postsController = require('../controllers/dash') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createPost', todosController.createPost)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router
