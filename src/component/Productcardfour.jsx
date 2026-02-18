import React from 'react'
import imag23 from "../assets/1.webp"
import imag24 from "../assets/2.webp"
import imag25 from "../assets/3.webp"
import imag26 from "../assets/4.webp"
import imag27 from "../assets/1 (1).webp"
import imag28 from "../assets/2 (1).webp"
import imag29 from"../assets/3 (1).webp"

export default function Productcardfour() {
  return (
    <div>
        <div className="headingg">
            <h1>___ WELCOME TO FLONE ___</h1>
            <p>We are a team of designers and developers that create high quality WordPress, Magento, Prestashop, Opencart themes and <br />
provide premium and dedicated support to our products.</p>
<h3>We are a team of designers and developers that create high quality WordPress, Magento, Prestashop, Opencart themes and
provide premium and dedicated support to our products.</h3>
          </div>
          <div className='section'>
            <img src={imag23} alt="" />
          </div>
           <div className='section-two'>
            <img src={imag24} alt="" />
          </div>
          <div className='section-three'>
            <img src={imag25} alt="" />
          </div>
           <div className='section-four'>
            <img src={imag26} alt="" />
          </div>
          <div className='heading-one'>
            <h1>FLATEST BLOGS & UPDATES ____</h1>
          </div>
          <div className='one'>
            <img src={imag27} alt="" />
          </div>
          <div className='two'>
            <img src={imag28} alt="" />
          </div>
          <div className='three'>
            <img src={imag29} alt="" />
          </div>

          
    </div>
  )
}
