const Image = require('../models/Image');
const { uploadToCloudinary } = require('../helpers/cloudinary-helper');
const fs = require('fs')

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
    const images = await Image.find({})
    if(images){
      res.status(200).json({
        success:true,
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

module.exports = { uploadImageController,fetchImagesController };