const Image = require('../models/Image');
const { uploadToCloudinary } = require('../helpers/cloudinary-helper');
const fs = require('fs')
const cloudinary = require('../config/cloudinary')

const uploadImageController = async (req, res) => {
  try {
    // Check if file is missing
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'File is required. Please upload an image.',
      });
    }

    // Upload to Cloudinary
    const { url, publicId } = await uploadToCloudinary(req.file.path);

    // Store image URL and public ID along with the uploaded user ID in database
    const newlyUploadedImage = new Image({
      url,
      publicId,
      uploadedBy: req.user.userId, // Fixed from req.userInfo.userId
    });

    await newlyUploadedImage.save();

    // delete the file from LocalStorage

    fs.unlinkSync(req.file.path)

    res.status(201).json({
      success: true,
      message: 'Image uploaded successfully!',
      image: newlyUploadedImage,
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again.',
    });
  }
};

const fetchImagesController = async(req,res)=>{
  try {

    
    const page  = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page-1)*limit

    const sortBy = req.query.sortBy || 'createdAt'
    const sortOrder= req.query.sortOrder === 'asc' ? 1 : -1;
    const totalImages = await Image.countDocuments()
    const totalPages = Math.ceil(totalImages / limit)

    const sortObj = {}

    sortObj[sortBy] = sortOrder




    const images = await Image.find().sort(sortObj).skip(skip).limit(limit)
    if(images){
      res.status(200).json({
        success:true,
        currentpage:page,
        totalPages:totalPages,
        totalImages:totalImages,
        data:images
      })
    }
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again.',
    });

    
  }
}
const deleteImageController = async(req,res)=>{
  try {

    const getImageId = req.params.id
    const userId = req.userInfo.userId;
    
    const image = await Image.findById(getImageId)

    if(!image){
      return res.status(404).json({
        success:false,
        message:'Image not found'
      })
    }


    //check if this image is uploaded by the current user who is trying to delete this image

    if(image.uploadedBy.toString()!== userId){
      return res.status(403).json({
        success:false,
        message:'You are not Authorized to delete this image.'
      })
    }


    // delete this image from cloudinary
    await cloudinary.uploader.destroy(image.publicId)



    // delete the imagefrom MongoDB 
    await Image.findByIdAndDelete(getImageId)

    res.status(200).json({
      success:true,
      message:"Image Deleted Successfully"
    })

    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again.',
    });
    
  }
}
module.exports = { uploadImageController,fetchImagesController,deleteImageController };