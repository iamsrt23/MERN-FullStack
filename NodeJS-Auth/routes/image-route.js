const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleWare = require('../middleware/admin-middleware')
const uploadMiddleWare = require('../middleware/upload-middleware')
const {uploadImageController,fetchImagesController, deleteImageController} = require('../controllers/image-controller')
const router = express.Router()



// upload the image
router.post('/upload',authMiddleware,adminMiddleWare,uploadMiddleWare.single('image'),uploadImageController)


// to get all the images

router.get('/get',uploadImageController.fetchImagesController)

// delete
router.delete('/:id',adminMiddleWare,adminMiddleWare,deleteImageController)



module.exports = router