import React from "react";
import '../CSS modules/navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="nav-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/" style={{ textDecoration: 'none' }}>
                        <span style={{ fontWeight: 'bold', color: 'pink' }}>Glam</span>
                        <span style={{ fontWeight: 'bold', color: 'black' }}>Empire</span>X
                    </Link>

                    <div className="collapse navbar-collapse ml-100" id="navbarSupportedContent">
                        <form className="d-flex">
                            <input className="form-control me-2" style={{ width: '600px' }} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                        <Link className="nav-ele" to="/products">Explore</Link>
                        <div className="icons">
                            <Link to="/cart"><i className="fa-solid fa-cart-shopping" style={{ color: 'black' }}></i></Link>
                            <Link to="/Wishlist"><i className="fa-solid fa-heart" style={{ color: 'black' }}></i></Link>
                            <Link to="/profile"><i className="fa-solid fa-user" style={{ color: 'black' }}></i></Link>
                        </div>

                    </div>



                </nav>
            </div>
        </>
    );
};

export default Navbar;
