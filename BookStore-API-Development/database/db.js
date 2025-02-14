const mongoose = require('mongoose')
const dotEnv = require('dotenv')
dotEnv.config()
const connectToDB = async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected Successfully')
  } catch (error) {
    console.error('MongoDB Connection Failed',error)
    process.exit(1)
    
  }
}

module.exports = connectToDB;