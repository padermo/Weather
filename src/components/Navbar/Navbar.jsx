import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import logo from '../../assets/logo.png'

function Navbar({viewSearchbar}) {
  return (
    <div className='navbar'>
      <div className="navbar__content">
        <figure className='navbar__picture'>
          <img src={logo} alt="logo" className="navbar__img" />
        </figure>

        <div className='navbar__search'>
          {viewSearchbar === true ? <Searchbar/> : ""}
        </div>
      </div>
    </div>
  )
}

export default Navbar