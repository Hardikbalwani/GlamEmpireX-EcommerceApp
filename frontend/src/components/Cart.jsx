import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../CSS modules/cart.css'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart()
    const navigate = useNavigate()

    const totalPrice = cart?.items?.reduce((total, item) => {
        return total + (item.product?.price * item.quantity)
    }, 0) || 0

    return (
        <div>
            <div className="nav-container">
                <Navbar />
            </div>

            <div className="cart-page">
                {/* Heading */}
                <div className="cart-heading">
                    <h5 className="h-5">My Cart
                        {cart?.items?.length > 0 && (
                            <span className="cart-item-count">
                                ({cart.items.length} {cart.items.length === 1 ? 'item' : 'items'})
                            </span>
                        )}
                    </h5>
                </div>

                <div className="Cart_productsAndPrice__t5c0I">

                    {/* LEFT — Product List */}
                    <section className="Cart_myProducts__p8Rax">

                        {/* Empty Cart */}
                        {cart?.items?.length === 0 ? (
                            <div className="Cart_emptyCartMsgWrapper__xTvqO">
                                <img
                                    src="https://res.cloudinary.com/dmlhtqirp/image/upload/v1688729257/BRUKart/empty_cart.gif"
                                    loading="lazy"
                                    alt="empty-cart"
                                    width="40%"
                                />
                                <p className="Cart_emptyCartMsg__ADKpZ">
                                    Your Cart is Empty!
                                    <div>Discover amazing products and add them to your cart.</div>
                                </p>
                                <button
                                    className="button Cart_shopnowButton__NWGjF"
                                    onClick={() => navigate('/products')}
                                >
                                    Start Shopping Now
                                </button>
                            </div>

                        ) : (
                            /* Cart Items List */
                            <div className="cart-items-list">
                                {cart.items.map((item) => (
                                    <div className="cart-item-card" key={item.product?._id}>

                                        {/* Product Image */}
                                        <div className="cart-item-image-wrapper">
                                            <img
                                                src={item.product?.image}
                                                alt={item.product?.name}
                                                className="cart-item-image"
                                                onError={(e) => {
                                                    // if image fails to load → show placeholder
                                                    e.target.src = 'https://via.placeholder.com/120x120?text=Product'
                                                }}
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="cart-item-details">
                                            <h4 className="cart-item-name">
                                                {item.product?.name}
                                            </h4>
                                            <p className="cart-item-category">
                                                {item.product?.category}
                                            </p>
                                            <p className="cart-item-price">
                                                ${item.product?.price}
                                            </p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="cart-item-quantity">
                                            <button
                                                className="qty-btn"
                                                onClick={() =>
                                                    updateQuantity(item.product?._id, item.quantity - 1)
                                                }
                                            >
                                                −
                                            </button>
                                            <span className="qty-number">{item.quantity}</span>
                                            <button
                                                className="qty-btn"
                                                onClick={() =>
                                                    updateQuantity(item.product?._id, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Item Total */}
                                        <div className="cart-item-total">
                                            <span className="total-label">Subtotal</span>
                                            <span className="total-amount">
                                                ${(item.product?.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            className="cart-remove-btn"
                                            onClick={() => removeFromCart(item.product?._id)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>

                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* RIGHT — Order Summary */}
                    {cart?.items?.length > 0 && (
                        <section className="cart-summary">
                            <h3 className="summary-heading">Order Summary</h3>

                            <div className="summary-items">
                                {cart.items.map((item) => (
                                    <div className="summary-item" key={item.product?._id}>
                                        <span className="summary-item-name">
                                            {item.product?.name}
                                            <small> × {item.quantity}</small>
                                        </span>
                                        <span className="summary-item-price">
                                            ${(item.product?.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <hr className="summary-divider" />

                            {/* Total */}
                            <div className="summary-total">
                                <span>Total</span>
                                <span className="total-price">${totalPrice.toFixed(2)}</span>
                            </div>

                            {/* Checkout Button */}
                            <button
                                className="checkout-btn"
                                onClick={() => alert('Checkout coming soon!')}
                            >
                                Proceed to Checkout
                            </button>

                            {/* Continue Shopping */}
                            <button
                                className="continue-btn"
                                onClick={() => navigate('/products')}
                            >
                                Continue Shopping
                            </button>
                        </section>
                    )}

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart
