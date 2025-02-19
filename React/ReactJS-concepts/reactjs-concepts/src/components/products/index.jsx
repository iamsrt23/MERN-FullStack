import ProductItem from "./components/product-item"
import './style.css'

// const dummyProductData = ['Product 1','Product 2','Product 3']




function ProductList({ name, city, listOfProducts }){

  const flag = true

  // function renderTextBlock(getFlag){
  //   if(getFlag === true){
  //     return getFlag ?  (<h4>Name is {name} and belongs to {city}</h4>)
  //       : (<h4>Hello World</h4>)
      

  //   }

  // }

  const renderTextBlock = flag ?
        <h4>Name is {name} and belongs to {city}</h4>: 
        <h4>Hello World</h4>






  return <div>
    <h3 className="title">E-Commerce Project</h3>
    {/* <ProductItem /> */}
    {/* dynamic logic */}
    {/* Ternary Operator */}
    {/* {renderTextBlock(flag)} */}
    {renderTextBlock}

  
    <ul>
      {
       listOfProducts.map((item,index)=>{
          return(
           <ProductItem singleProductItem={item} key={index} />
          )
        })
       
      }
    </ul>
  </div>
  
}

export default ProductList