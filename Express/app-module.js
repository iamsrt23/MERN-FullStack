const express = require('express')
const app = express()

app.set('view engine','ejs')


app.get('/',(req,res)=>{
  res.send('Home Page')
})


app.post('/api/path',(req,res)=>{
  res.json({
    message:"Data received",
    data: req.body
  })
})

app.use((err,req,res,next) =>{
  console.log(err.stack)
  res.status(500).send('Something went wrong')

})

const PORT = 3001