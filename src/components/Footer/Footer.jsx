import React from 'react'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__elements">
        <figure className="footer__picture">
          <img src={logo} alt="logo" className="footer__img" />
        </figure>

        <p className="footer__text">All rights reserved &copy;</p>
      </div>
    </div>
  )
}

export default Footer