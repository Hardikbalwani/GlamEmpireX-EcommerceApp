import React, { useState } from "react";
import '../CSS modules/navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    return (
        <>
            <div className="nav-wrapper">
                <nav className="navbar custom-navbar navbar-light bg-light">
                    <Link className="navbar-brand" to="/" style={{ textDecoration: 'none' }}>
                        <span style={{ fontWeight: 'bold', color: 'pink' }}>Glam</span>
                        <span style={{ fontWeight: 'bold', color: 'black' }}>Empire</span>X
                    </Link>

                    <div className="nav-right-container">
                        <form className="d-flex desktop-search">
                            <input className="form-control me-2 desktop-search-input" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>

                        <div className="mobile-search-toggle" onClick={() => setShowMobileSearch(!showMobileSearch)}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <Link className="nav-ele" to="/products">Explore</Link>

                        <div className="icons">
                            <Link to="/cart"><i className="fa-solid fa-cart-shopping" style={{ color: 'black' }}></i></Link>
                            <Link to="/Wishlist"><i className="fa-solid fa-heart" style={{ color: 'black' }}></i></Link>
                            <Link to="/profile"><i className="fa-solid fa-user" style={{ color: 'black' }}></i></Link>
                        </div>
                    </div>
                </nav>

                {showMobileSearch && (
                    <div className="mobile-search-dropdown bg-light border-top p-2">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info btn-sm" type="submit">Search</button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
