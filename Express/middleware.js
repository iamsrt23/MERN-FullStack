const express  = require('express')
const app = express()


// define Middleware


const myFirstMiddleWare = (req,res,next)=>{
  console.log('This middle ware Run on Every request')

  next()
}

app.use(myFirstMiddleWare);

app.get('/',(req,res)=>{
  res.send('Home Page')
})
app.get('/about',(req,res)=>{
  res.send('About Page')
})

app.listen(3001,console.log(`server is running on port 3001`))