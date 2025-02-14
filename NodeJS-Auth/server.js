const express = require('express')
const dotEnv = require('dotenv')
const connectToDB = require('./database/db')
const authRoutes = require('./routes/auth-routes')
const homeRoutes = require('./routes/home-routes')
dotEnv.config()

const app = express()
const PORT = process.env.PORT || 3002
connectToDB();

// middleware
app.use(express.json())

// routes
app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)








app.listen(PORT,()=>{
  `Server is Listening at PORT: ${PORT}`
})