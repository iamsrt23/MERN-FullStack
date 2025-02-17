const cloudinary = require('../config/cloudinary')

const uplodToCloudinary = async(filePath)=>{
  try {

    const result = await cloudinary.uploader.upload(filePath)
    return{
      url:result.secure_url,
      publicId: result.public_id,
    }
    
  } catch (error) {
    console.error('Error while Uploading to cloudinary',error)
    throw new Error('Error while Uploading to Cloudinary')
    
  }

}
module.exports = uplodToCloudinary;