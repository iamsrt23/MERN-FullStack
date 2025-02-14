const mongoose = require('mongoose')
const dotEnv = require('dotenv')
dotEnv.config()


const connectDB = async()=>{
  try {

    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected Suceessfully")


    
  } catch (error) {
    console.error('MongoDB connection Failed')
    process.exit(1)
    
  }
}

module.exports = connectDB;