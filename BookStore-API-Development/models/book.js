const mongoose = require('mongoose')


// create a schema

const BookSchema = mongoose.Schema({
  title:{
    type: String,
    required:[true,'Book Title is required'],
    trim:true,
    maxLength:[100, 'Book Title can not be more than 100 characters']
  },
  author:{
    type: String,
    required:[true,'author name is required'],
    trim:true,
  },
  year:{
    type:Number,
    required:[true,'publication Year is required'],
    min:[1000, 'year must be atleast 1000'],
    max:[new Date().getFullYear(),'year can not be in the future'],
  },
  createdAt:{
    type:Date,
    default: Date.now,
  }
})


module.exports = mongoose.model('Book',BookSchema)