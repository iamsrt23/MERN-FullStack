const express = require('express')
const app = express()

// root Route
app.get('/',(req,res)=>{
  res.send('Welcome to Our Home Page')
})

// to get all Products


app.get('/products',(req,res)=>{
  const products = [
    {
      id:1,
      label:'Product 1'
    },
    {
      id:2,
      label:'Product 2'
    },
    {
      id:3,
      label:'Product 3'
    },
    {
      id:4,
      label:'Product 4'
    }
  ]
  res.json(products)

})


// to get single product

app.get('/products/:id',(req,res)=>{
  const productId = parseInt(req.params.id)
  const products = [
    {
      id:1,
      label:'Product 1'
    },
    {
      id:2,
      label:'Product 2'
    },
    {
      id:3,
      label:'Product 3'
    },
    {
      id:4,
      label:'Product 4'
    }
  ]

  const getSingleProduct = products.find(thing=>thing.id === productId)
  if(!getSingleProduct){
    res.staus(404).send('Product id not found please try with different id')
  }
  res.json(getSingleProduct)
})

const PORT = 3001


app.listen(PORT,()=> console.log(`Server is now running at PORT: ${PORT}`))