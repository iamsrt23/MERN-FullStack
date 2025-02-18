const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
dotEnv.config()


// register endpoint


const registerUser = async(req,res)=>{
  try {
    // user information extract
    const {username,email,password,role} = req.body
    // if user exist already in Database
    const checkExistingUser = await User.findOne({$or:[{username},{email}]})
    if(checkExistingUser){
      return res.status(400).json({message:`user is already exists with ${username}`})
    }

    // hashed password
    const salt = await bcrypt.genSalt(11)
    const hashedPassword = await bcrypt.hash(password,salt)


    // created new user saved in DB
    const newUser = new User({
      username,
      email,
      password:hashedPassword,
      role:role || 'user'
    })

    await newUser.save()

    if(newUser){
      res.status(200).json({message:"User registered Successfully"})
    }else{
      res.status(400).json({message:'Unable to Register User'})
    }

    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}




// login controller

const loginUser = async(req,res)=>{
  try {
    const {username,password} = req.body
    const user = await User.findOne({username})
    const isPasswordCorrect  = await bcrypt.compare(password,user.password || "")
    if(!user || !isPasswordCorrect){
      return res.status(400).json({error:"Invalid username or Password"})
    } 
    

    // create usertoken
    const token = jwt.sign({
      userId: user._id,
      username:user.username,
      role:user.role
    },process.env.JWT_SECRET_KEY,{
      expiresIn: '1m'
    })
    res.status(200).json({
      message:"Login Successful",
      token
    })


    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const changePassword = async(req,res)=>{
  try {

    const userId = req.userInfo.userId

    // extract old and new password

    const {oldPassword,newPassword} = req.body

    // findthe current logged in user

    const user = await User.findById(userId)

    if(!user){
      return res.status(400).json({
        success:false,
        message:'User not Found'

      })
    }

    // check if old password is correct

    const isPasswordMatch = await bcrypt.compare(oldPassword,user.password)
    if(!isPasswordMatch){
      return res.status(400).json({
        success:false,
        message:"Old password is not Correct please Try again"
      })
    }

    // hashthe newpassword
    const salt = bcrypt.genSalt(10)
    const newHashedPassword = await bcrypt.hash(newPassword,salt)

    // update user password
    user.password = newHashedPassword
    await user.save()

    res.status(200).json({
      success:true,
      message:'Password changed successfully'
    })

    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
    
  
}


module.exports = {loginUser,registerUser,changePassword}