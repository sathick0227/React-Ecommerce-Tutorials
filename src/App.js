import React, {useState} from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Data from "./components/Data/data"
import Sdata from "./components/Data/Sdata"
import Pages from "./components/page"
import Cart from "./components/Cart/Cart"

function App() {

   const { productItems } = Data
   const { shopItems } = Sdata

   const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }

    
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
    <Router>
        <Header CartItem={CartItem}/>
        
          
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          

          
        

   
  
    </Router>
    </>
    
    
 
  )
}

export default App