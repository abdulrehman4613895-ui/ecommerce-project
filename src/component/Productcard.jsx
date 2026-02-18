import React from 'react'
import imag1 from "../assets/10.jpg"
import imag2 from "../assets/3.jpg"
import imag3 from "../assets/11.jpg"
import imag4 from "../assets/6.jpg"
import imag5 from "../assets/1.jpg"
import imag6 from "../assets/9.jpg"
import imag7 from "../assets/8.jpg"
import imag8 from "../assets/12.jpg"
import imag9 from "../assets/5.jpg"
import imag10 from "../assets/11.jpg"
export default function Productcard() {
  return (
    <div>
       <div className="product-card">
            <img src={imag1} alt={name} className="product-image" />
            <h2 className="product-name">Running Sports Shoes</h2>
            <p className="product-description">Men Premium Collection</p>
            <p className="product-price">$120</p>
            <button className="product-button">Buy Now</button>
          </div>
      
           <div className="product-card-one">
            <img src={imag2} alt={name} className="product-image" />
            <h2 className="product-name-one">Classic Leather Watch</h2>
            <p className="product-description-one">Brown Strap Edition</p>
            <p className="product-price-one">$120</p>
            <button className="product-button-one">Buy Now</button>
          </div>
      
           <div className="product-card-two">
            <img src={imag3} alt={name} className="product-image" />
            <h2 className="product-name-two">Black Stylish Sunglasses</h2>
            <p className="product-description-two">UV Protection</p>
            <p className="product-price-two">$65</p>
            <button className="product-button-two">Buy Now</button>
          </div>
      
          <div className="product-card-three">
            <img src={imag4} alt={name} className="product-image" />
            <h2 className="product-name-three">Genuine Leather Belt</h2>
            <p className="product-description-three">Adjustable Size</p>
            <p className="product-price-three">$45</p>
            <button className="product-button-three">Buy Now</button>
          </div>
      
           <div className="product-card-four">
            <img src={imag5} alt={name} className="product-image" />
            <h2 className="product-name-four">Casual Printed Loafers</h2>
            <p className="product-description-four">Comfort Wear</p>
            <p className="product-price-four">$75</p>
            <button className="product-button-four">Buy Now</button>
          </div>
      
           <div className="product-card-five">
            <img src={imag6} alt={name} className="product-image" />
            <h2 className="product-name-five">Grey Travel Backpack</h2>
            <p className="product-description-five">Water Resistant</p>
            <p className="product-price-five">$95</p>
            <button className="product-button-five">Buy Now</button>
          </div>
      
           <div className="product-card-six">
            <img src={imag7} alt={name} className="product-image" />
            <h2 className="product-name-six">Men Slim Fit Chinos</h2>
            <p className="product-description-six">Premium Cotton</p>
            <p className="product-price-six">$70</p>
            <button className="product-button-six">Buy Now</button>
          </div>
      
           <div className="product-card-seven">
            <img src={imag8} alt={name} className="product-image" />
            <h2 className="product-name-seven">Summer Fedora Hat</h2>
            <p className="product-description-seven">Lightweight Style</p>
            <p className="product-price-seven">$40</p>
            <button className="product-button-seven">Buy Now</button>
          </div>
      
           <div className="product-card-eight">
            <img src={imag9} alt={name} className="product-image" />
            <h2 className="product-name-eight"> Makeup Brush Set</h2>
            <p className="product-description-eight">10pcs Kit</p>
            <p className="product-price-eight">$55</p>
            <button className="product-button-eight">Buy Now</button>
          </div>
      
           <div className="product-card-nine">
            <img src={imag10} alt={name} className="product-image" />
            <h2 className="product-name-nine">Designer Black Sunglasses</h2>
            <p className="product-description-nine">Limited Edition</p>
            <p className="product-price-nine">$85</p>
            <button className="product-button-nine">Buy Now</button>
          </div>
    </div>
  )
}
