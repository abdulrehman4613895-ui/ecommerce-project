import React from 'react'
import imag21 from "../assets/home4-banner1.webp"
import imag22 from "../assets/home4-banner2.webp"
import imag23 from "../assets/home5-block-img.webp"

export default function Productcardthree() {
  return (
    <div>
      <div className='collection'>
        <img src={imag23} alt="" />
        <h1>A UNIQUE FASHION TUORING</h1>
        <h2>WELCOME TO STORE</h2>
        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam <br /> littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta <br /> decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
      
      <h3>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
</h3>
 </div>
      <button type="button" className="btn btn-outline-secondary">
  LEARN MORE
</button>
<div className='banner-three'>
    <img src={imag21} alt="" />
</div>
<div className='banner-four'>
    <img src={imag22} alt="" />
</div>

    </div>
  )
}
