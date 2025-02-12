const express = require('express')
const path = require('path')

const app = express()

// set the viewEngine as ejs
app.set('view engine','ejs')


// set the directory to views(folder)
app.set('views',path.join(__dirname,'views'))


const products = [
  {
    id:1,
    title:'Product 1'
  },
  {
    id:2,
    title:'Product 2'
  },
  {
    id:3,
    title:'Product 3'
  },
  {
    id:4,
    title:'Product 4'
  }

]

app.get('/',(req,res)=>{
  res.render('home',{title:'Home',products: products})
})

app.get('/about',(req,res)=>{
  res.render('about',{title:"About Page"})

})

app.listen(3001,()=>console.log('server is running on 3001 port'))