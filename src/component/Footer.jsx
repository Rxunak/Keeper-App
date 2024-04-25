import React from 'react'
import Styles from '../styles/Footer.css'

function Footer() {

    let currentYear = new Date().getFullYear()
  return (
    <div className='footerContainer'>
      <div className='mainFooter'>
      <p className='footerP'>Copyright &copy; {currentYear}</p>
      </div>
       
    </div>
  )
}

export default Footer