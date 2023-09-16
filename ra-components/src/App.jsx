import './App.css'
import Product from './functional_component/Product'
import ProductClass from './class_component/ProductClass'

function App({item}) {  
  return (
    <>
      <Product item={item[0]} />
      <ProductClass item={item[1]} />
    </>
  )
}

export default App
