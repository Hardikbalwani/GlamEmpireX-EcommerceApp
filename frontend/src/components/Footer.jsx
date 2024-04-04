import React from 'react'
import '../CSS modules/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="footer1">
            <a href="https://github.com/Hardikbalwani" target='_blank' rel="noreferrer">Contribute to GlamEmpireX</a>
            <div className="social-handles">
             <a href="https://github.com/Hardikbalwani" target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/hardik-balwani-a56947230/" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              <Link to="/"><i className="fa-brands fa-twitter"></i></Link>
            </div>
          </div>
          <div className="footer2">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/products">Features</Link>
          </div>
          <div className="footer3">
            <Link to="/cart">My Cart</Link>
            <Link to="/Wishlist">WishList</Link>
            <Link to="/profile">Settings</Link>
          </div>
        </div>
         
        <div className="copyright">
          Copyright @2023
          <Link to="/"> Hardik Balwani </Link>
          . All Rights Reserved
        </div>
      </div>
    </>
  )
}

export default Footer