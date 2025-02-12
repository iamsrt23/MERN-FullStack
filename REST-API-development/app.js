const express = require('express')
const app = express();


// Middle Ware
app.use(express.json())


let books = [
  {
    id:1,
    title: 'book 1'
  },
  {
    id:2,
    title: 'book 2'
  },
  {
    id:3,
    title: 'book 3'
  },
  {
    id:4,
    title: 'book 4'
  }
]


// Intro Route
app.get('/',(req,res)=>{
  res.json({
    message:'Welcome to Our Book Store api'
  })
})

// get all books
app.get('/books',(req,res)=>{
  res.json(books)
})

//  get a single book

app.get('/books/:id',(req,res)=>{
  const book = books.find(item=>item.id === Number(req.params.id))

  if(!book){
    return res.status(404).json({message:"Book Id not Found"})
  }
  res.status(200).json(book)
})

// add a newbook
app.post('/add',(req,res)=>{
  const newBook = {
    id: books.length + 1,
    title: `book ${books.length+1}`
  }
  books.push(newBook)
  res.status(200).json({
    data:newBook,
    message:'New books is added successfully'
  })
})

// update a book
app.put('/update/:id',(req,res)=>{
  const findCurrentBook = books.find(bookItem => bookItem.id === Number(req.params.id))
  if(!findCurrentBook){
    return res.status(404).json({message:"Book Not found"})
  }
  findCurrentBook.title = req.body.title || findCurrentBook.title

  res.status(200).json({
    message: `Book with ID ${req.params.id} updated successfully`,
    data:findCurrentBook
  })

})


// delete book

app.delete('/delete/:id',(req,res)=>{
  const findIndexOfCurrentBook = books.findIndex(item=>item.id === Number(req.params.id))
  if(findIndexOfCurrentBook === -1){
    return res.status(404).json({message:"Book Not found"})
  }else{
    const deletedBook =  books.splice(findIndexOfCurrentBook,1)[0]
    res.status(200).json({message:'Book Deleted Successfully',
      data:deletedBook
    })
  }

})




app.listen(3001,()=> console.log(`server is running on port 3001`))