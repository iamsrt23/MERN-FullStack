const Book = require("../models/book");

// to get all Books
const getAllBooks = async(req,res)=>{
  try {
    const allBooks = await Book.find({})
    if(!allBooks){
      return res.status(404).json({message:'Books Not Found'})
    }

    res.status(200).json({message:"Book Found",data:allBooks})
    
  } catch (error) {

    res.status(500).json(error)
    console.error(error)
    
  }
  

}

// get a single book by id

const getSingleBookById = async(req,res)=>{
  try {

    const getBookId = req.params.id
    const bookDetailsById = await Book.findById(getBookId)

    if(!bookDetailsById){
      return res.status(404).json({message:"Book Not Found"})
    }

    res.status(200).json({message:"Book Found",data:bookDetailsById})

    
  } catch (error) {
    res.status(500).json(error)
    console.error(error)
    
  }

}



// added newBook TO DB
const addNewBook = async(req,res)=>{
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if(!newlyCreatedBook){
      return res.status(400).json({message:'Book Data not Created'})
    }

    

    res.status(200).json({message:'New Book Data Added',
                        data:newlyCreatedBook
    })



  } catch (error) {
    
    res.status(500).json(error)
    console.error(error)

    
  }

}



// update the book
const updateBookById  = async(req,res)=>{

  try {

    const updateBookFormData = req.body
    const bookId = req.params.id
    const updateBook = await Book.findByIdAndUpdate(bookId,updateBookFormData)
    if(!updateBook){
      return res.status(404).json({message:"Book data not found"})
    }
    res.status(200).json({message:"Book updated Successfully",data:updateBook})
    
  } catch (error) {
    
    res.status(500).json(error)
    console.error(error)
  }
 

}

// delete the book
const deleteBookById = async(req,res)=>{
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId)
    if(!deletedBook){
      return res.status(404).json({message:"Book is not found with id"})
    }
    res.status(200).json({message:"Book Deleted Successfully",data:deletedBook})
    
  } catch (error) {
    res.status(500).json(error)
    console.error(error)
    
  }

}



module.exports={
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBookById,
  deleteBookById
}