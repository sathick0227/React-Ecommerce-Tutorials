import React from "react"
import "./header.css"
import Head from "./head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  

  return (
    <>
      <Head/>
      <Search CartItem={CartItem}/>
      <Navbar/>
      
    </>
  )
}

export default Header;