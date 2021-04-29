const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dash') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, dashController.getTodos)

router.post('/createPost', dashController.createPost)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router
