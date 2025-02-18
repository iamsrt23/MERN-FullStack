const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
dotEnv.config()
const productRoutes = require('./routes/product-routes')
const bookRoutes = require('./routes/books-routes')

const app = express()

// dbcoonection
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected')).catch((e)=>console.log(e))



// middleware
app.use(express.json())

// routes

app.use('/products',productRoutes)
app.use('/reference',bookRoutes)

const PORT = process.env.PORT || 3003

app.listen(PORT,()=>console.log(`Server is Connected to Port: ${PORT}`))