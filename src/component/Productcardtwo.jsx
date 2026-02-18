import React from 'react'
import imag11 from "../assets/shop_banner_img1.jpg"
import imag12 from "../assets/shop_banner_img2.jpg"
import imag16 from "../assets/product_img6.jpg"
import imag17 from "../assets/product_img7.jpg"
import imag18 from "../assets/product_img8.jpg"
import imag19 from "../assets/brown-bear-printed-sweater.jpg"
import imag20 from "../assets/mug-today-is-a-good-day.jpg"

export default function Productcardtwo() {
  return (
    <div>
        <div className='banner'>
            <img src={imag11} alt="" />
            <div className='banner-two'>
            <img src={imag12} alt="" />
        </div>
        </div>
      <div>
        <div className="heading">
            <h1>___ OUR DEAL ___</h1>
          </div>
            
            
                 <div className="product-card-five">
                  <img src={imag16} alt={name} className="product-image" />
                  <h2 className="product-name-five">Men Check Casual Shirt</h2>
                  <p className="product-description-five">Slim Fit Cotton</p>
                  <p className="product-price-five">$55</p>
                  <button className="product-button-five">Buy Now</button>
                </div>
            
                 <div className="product-card-six">
                  <img src={imag17} alt={name} className="product-image" />
                  <h2 className="product-name-six">Women Striped Dress</h2>
                  <p className="product-description-six">Casual Street Style</p>
                  <p className="product-price-six">$68</p>
                  <button className="product-button-six">Buy Now</button>
                </div>
            
                 <div className="product-card-seven">
                  <img src={imag18} alt={name} className="product-image" />
                  <h2 className="product-name-seven">Men Denim Jacket</h2>
                  <p className="product-description-seven">Classic Blue Edition</p>
                  <p className="product-price-seven">$120</p>
                  <button className="product-button-seven">Buy Now</button>
                </div>
            
                 <div className="product-card-eight">
                  <img src={imag19} alt={name} className="product-image" />
                  <h2 className="product-name-eight">Floral Maxi Dress</h2>
                  <p className="product-description-eight">Lightweight Summer Wear</p>
                  <p className="product-price-eight">$95</p>
                  <button className="product-button-eight">Buy Now</button>
                </div>
            
                 <div className="product-card-nine">
                  <img src={imag20} alt={name} className="product-image" />
                  <h2 className="product-name-nine">Faux Fur Winter Jacket</h2>
                  <p className="product-description-nine">Warm & Trendy</p>
                  <p className="product-price-nine">$150</p>
                  <button className="product-button-nine">Buy Now</button>
                </div>
          </div>
    </div>
  )
}
