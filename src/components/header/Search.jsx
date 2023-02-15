import React from "react"
import logo from "./logo.png"

const Search = ({ CartItem }) => {
   
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
     const style = {
      marginTop:"-15px",
      marginLeft:"50px",
      width:"50%",
      height:"80px"
};
   

  return (
    <>
      
      <section className='search'>
        <div className='container-fluid c_flex'>
          <div className='logo width'>
            <img src={logo} alt='' style={style} />
          </div>

          <div className='form-control search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
             
                <i className='fa fa-shopping-bag icon-circle'></i>
                {/*<span>{CartItem.length === 0 ? "" : CartItem.length}</span>*/}
              
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Search