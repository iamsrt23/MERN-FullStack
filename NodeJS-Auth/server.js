const express = require('express')
const dotEnv = require('dotenv')
const connectToDB = require('./database/db')
const authRoutes = require('./routes/auth-routes')
const homeRoutes = require('./routes/home-routes')
const adminRoutes = require('./routes/admin-routes')
const uploadImageRoutes = require('./routes/image-route')
dotEnv.config()

const app = express()
const PORT = process.env.PORT || 3002
connectToDB();

// middleware
app.use(express.json())

// routes
app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/image',uploadImageRoutes)







app.listen(PORT,()=>{
  `Server is Listening at PORT: ${PORT}`
})