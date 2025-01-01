const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const postsController = require("../controllers/posts");
const cameraController = require('../controllers/camera');
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
// New route for camera upload
router.post('/camera-upload', upload.single('event_image_0'), cameraController.handleCameraUpload)


module.exports = router