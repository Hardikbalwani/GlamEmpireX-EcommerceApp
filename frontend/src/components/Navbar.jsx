import React, { useState } from "react";
import '../CSS modules/navbar.css'
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";        
import { useCart } from "../context/CartContext"; 

const Navbar = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const { auth, setAuth } = useAuth()           
    const { cartCount } = useCart()               

    
    const handleLogout = () => {
        
        setAuth({ user: null, token: "" })
        
        localStorage.removeItem("auth")
    }

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

                            {/* 👇 Cart icon with live count badge */}
                            <Link to="/cart" style={{ position: 'relative' }}>
                                <i className="fa-solid fa-cart-shopping" style={{ color: 'black' }}></i>
                                {/* only show badge if cart has items */}
                                {cartCount > 0 && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        background: 'pink',
                                        color: 'white',
                                        borderRadius: '50%',
                                        fontSize: '10px',
                                        width: '16px',
                                        height: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold'
                                    }}>
                                        {cartCount}
                                    </span>
                                )}
                            </Link>

                            <Link to="/Wishlist">
                                <i className="fa-solid fa-heart" style={{ color: 'black' }}></i>
                            </Link>

                            {/* 👇 Show login/logout based on auth state */}
                            {auth?.user ? (
                                
                                <span
                                    onClick={handleLogout}
                                    style={{ cursor: 'pointer', color: 'black' }}
                                >
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </span>
                            ) : (
                                
                                <Link to="/login">
                                    <i className="fa-solid fa-user" style={{ color: 'black' }}></i>
                                </Link>
                            )}

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
