const express = require('express')
const router = express.Router()
const {createUser} = require('../controllers/userController')
const {createPost} = require('../controllers/postController')

router.post('/createUser', createUser)
router.post('/createPost', createPost)

module.exports = router