import React from "react"
import Home from "./MainPage/Home"
import TopCate from "./top/TopCate"
import NewArrivals from "./newarrivals/NewArrivals"
import Discount from "./discount/Discount"
import Shop from "./shops/Shop"
import Annocument from "./annocument/Annocument"
import Wrapper from "./wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages