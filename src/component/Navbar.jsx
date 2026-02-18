import React,{useState} from 'react'
import hero from "../assets/pngtree-black-quiet-fashion-business-men-s-wear-new-e-commerce-taobao-image_899828.jpg";
import { Link } from "react-router-dom";


export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <nav className="navbar">
          <div className="logoo">Flone.</div>

          {/* Hamburger Icon */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/Collection">Collection</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
