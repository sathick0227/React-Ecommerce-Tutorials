import React, { useState } from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  
  const style={
    marginLeft:"24%",

  }
  const head={
    backgroundColor:'grey'
  }
  return (
    <>
      <header className='header' style={head}>
        <div className='container d_flex'>
          

          <div className='navlink' style={style}>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>pages</Link>
              </li>
              <li>
                <Link to='/user'>user account</Link>
              </li>
              <li>
                <Link to='/vendor'>vendor account</Link>
              </li>
              <li>
                <Link to='/track'>track my order</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar;