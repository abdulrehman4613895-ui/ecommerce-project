import React from 'react'
import imag11 from "../assets/blog-1.jpg"
import imag12 from "../assets/blog-2.jpg"
import imag13 from "../assets/blog-3.jpg"
export default function Heading() {
  return (
    <div>
       <div className="heading">
            <h1>___ OUR BLOG ___</h1>
          </div>
          
          <div className="card-group">
        <div className="card">
          <img src={imag11} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">A guide to latest trends</h5>
            <p className="card-text">
               This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </p>
           
          </div>
        </div>
        <div className="card">
          <img src={imag12} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Five ways to lead a happy life</h5>
            <p className="card-text">
               This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </p>
           
          </div>
        </div>
        <div className="card">
          <img src={imag13} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tips on having a happy life</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}
