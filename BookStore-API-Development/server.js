const express = require('express')
const dotEnv = require('dotenv')
const connectToDB = require('./database/db')
const bookRoutes = require('./routes/book-routes')
dotEnv.config()
const app = express()
const PORT = process.env.PORT || 3002;

// connect to DB

connectToDB()


// middleware 
app.use(express.json())

// routes
app.use('/api/books',bookRoutes)



// server listen

app.listen(PORT,()=>{
  console.log(`Server is now running on port ${PORT}`)
})