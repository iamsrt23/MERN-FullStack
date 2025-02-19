
import './App.css'
import ProductList from './components/products'

const dummyProductData = ['Product 1','Product 2','Product 3']

function App() {


  return (
    <>
      <h1>React JS Concepts 2025</h1>
      {/* <ClassBasedComponent />
      <FunctionalComponent /> */}
      <ProductList listOfProducts= {dummyProductData} name='Teja' city="HYD"/>
    </>
  )
}

export default App
