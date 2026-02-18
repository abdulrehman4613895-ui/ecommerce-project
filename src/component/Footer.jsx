import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer className="footer">
      <div className="footer-container">
        
        {/* LEFT SECTION */}
        <div className="footer-col logo-col">
          <h2 className="logo">Flone.</h2>
          <p>© 2026 Flone.</p>
        </div>

        {/* ABOUT US */}
        <div className="footer-col">
          <h4>ABOUT US</h4>
          <ul>
             <li>Home</li>
          <li>Shop</li>
          <li>Collection</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer-col">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Returns</li>
            <li>Support Policy</li>
            <li>Size guide</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div className="footer-col subscribe">
          <h4>SUBSCRIBE</h4>
          <p>
            Get E-mail updates about our latest shop
            and special offers.
          </p>
          <input type="email" placeholder="Enter your email address..." />
          <button>SUBSCRIBE</button>
        </div>

      </div>
    </footer>
    </div>
  )
}
