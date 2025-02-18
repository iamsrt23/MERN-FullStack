const Author = require("../models/Author")
const Book = require("../models/Book")



const createAuthor = async(req,res)=>{
  try {

    const author = new Author(req.body)
    await author.save()

    res.status(200).json({
      success:true,
      data: author
    })





    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success:false,
      message:'Some Error Occured'
    })
    
  }
}


const createBook = async(req,res)=>{
  try {
    const book = new Book(req.body)
    await book.save()
    res.status(200).json({
      success:true,
      data: book
    })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success:false,
      message:'Some Error Occured'
    })
    
  }
}

const getBookWithAuthor = async (req,res)=>{
  try {
    const book = await Book.findById(req.params.id).populate('author')
    if(!book){
      return res.status(404).json({message:"Book not Found"})
    }

    res.status(200).json({data:book})
    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:'Some Error Occured'
    })
    
  }
}


module.exports = {createAuthor,createBook,getBookWithAuthor}