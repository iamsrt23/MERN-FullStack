const express = require('express')
const { registerUser, loginUser, changePassword } = require('../controllers/auth-controller')
const authMiddleWare = require('../middleware/auth-middleware')
const router = express.Router()



// routes
router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/change-password',authMiddleWare,changePassword)




module.exports = router