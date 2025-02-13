const mongoose = require('mongoose')
const dotEnv  = require('dotenv')
dotEnv.config()

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log('Data base connected successfully'))
  .catch((e)=>console.log(e))

// Creating Schmea model
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
    createdAt:{type:Date,default: Date.now}
})

// create user Model
const User = mongoose.model('User',userSchema)


async function runQuires() {

  try {

    // create a new Document
    const newUser = await User.create({
      name:"updateUser",
      email:'update@gmail.com',
      age:65,
      isActive:false,
      tags:['update the user'],
    })

    console.log("Create a newuser:",newUser)

    const allUsers = await User.find({})
    console.log(allUsers)
    const getUsersActive  = await User.find({isActive:true})
    console.log(getUsersActive)
    
      const getJohnDoeUser = await User.findOne({name:'johndoe'}) // Always get the firstone using findOne command
      console.log(getJohnDoeUser)


      const getLastCreatedUserById = await User.findById(newUser._id)
      console.log(getLastCreatedUserById)

      const selectedFields = await User.find().select('name email -_id') // only name and email required we don't want _id
      console.log(selectedFields)



      const limitedUsers = await User.find().limit(5).skip(1) // limit 5 users and skip 1st one
      console.log(limitedUsers)

      const sortedUsers = await User.find().sort({age: -1}) //sort users with age in descending order
      console.log(sortedUsers)

      const countDocuments = await User.countDocuments({isActive:true}) //count the number of documents 
      console.log(countDocuments)



      const deletedUser = await User.findByIdAndDelete(newUser._id) //deleted the user with id
      console.log(deletedUser)

      const updateUser = await User.findByIdAndUpdate(newUser._id,{
        $set:{age:67},$push:{tags:'updated'}

      },
      {new:true}
    )
    console.log(updateUser)









  } catch (error) {

    console.log('Error ->',e)
    
  }finally{
    await mongoose.connection.close()
  }


  
}

runQuires()