const express = require('express')
const{ getAllBooks, getSingleBookById, addNewBook, updateBookById, deleteBookById } = require('../controllers/book-controller')

// create express router
const router = express.Router()


// create all routes related to books
router.get('/',getAllBooks)
router.get('/get/:id',getSingleBookById)
router.post('/add',addNewBook)
router.put('/update/:id',updateBookById)
router.delete('/delete/:id',deleteBookById )

module.exports = router