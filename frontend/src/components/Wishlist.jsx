import Navbar from "./Navbar"
import Footer from "./Footer"
import '../CSS modules/wishlist.css'
import React from 'react'
import { useWishlist } from '../context/WishlistContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Wishlist = () => {
    const { wishlist, removeFromWishlist, moveToCart } = useWishlist()
    const navigate = useNavigate()

    const items = wishlist?.items || []

    const handleRemove = async (productId, productName) => {
        await removeFromWishlist(productId)
        toast.info(`${productName} removed from wishlist`)
    }

    const handleMoveToCart = async (productId, productName) => {
        const result = await moveToCart(productId)
        if (result?.success) {
            toast.success(`${productName} moved to cart!`)
        }
    }

    return (
        <div>
            <div className="nav-container">
                <Navbar />
            </div>
            <div className="cart-page">
                <div className="cart-heading">
                    <h5 className="h-5">
                        My Wishlist {items.length > 0 && `(${items.length} items)`}
                    </h5>
                </div>

                <div className="Cart_productsAndPrice__t5c0I">
                    <section className="Cart_myProducts__p8Rax">

                        {/* ── Empty State ── */}
                        {items.length === 0 ? (
                            <div className="Cart_emptyCartMsgWrapper__xTvqO">
                                <img
                                    src="https://res.cloudinary.com/dmlhtqirp/image/upload/v1688729256/BRUKart/empty_wishlist.gif"
                                    loading="lazy"
                                    alt="empty-wishlist"
                                    width="40%"
                                />
                                <p className="Cart_emptyCartMsg__ADKpZ">
                                    Your Wishlist is Empty!
                                    <div>Make something that will make us pleased.</div>
                                </p>
                                <a className="button Cart_shopnowButton__NWGjF" href="/products">
                                    Explore
                                </a>
                            </div>

                        ) : (
                        /* ── Wishlist Items ── */
                            <div className="wishlist-items">
                                {items.map((item) => {
                                    const product = item.product
                                    if (!product) return null
                                    return (
                                        <div className="wishlist-card" key={item._id}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="wishlist-product-img"
                                            />
                                            <div className="wishlist-product-info">
                                                <h4>{product.name}</h4>
                                                <p className="wishlist-vendor">{product.vendor}</p>
                                                <p className="wishlist-price">
                                                    <strike>${product.oldPrice}</strike>
                                                    <span> ${product.price}</span>
                                                </p>
                                            </div>
                                            <div className="wishlist-actions">
                                                <button
                                                    className="wishlist-move-btn"
                                                    onClick={() => handleMoveToCart(product._id, product.name)}
                                                >
                                                    🛒 Move to Cart
                                                </button>
                                                <button
                                                    className="wishlist-remove-btn"
                                                    onClick={() => handleRemove(product._id, product.name)}
                                                >
                                                    🗑 Remove
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div className="wishlist-footer">
                                    <button
                                        className="wishlist-continue-btn"
                                        onClick={() => navigate('/products')}
                                    >
                                        ← Continue Shopping
                                    </button>
                                </div>
                            </div>
                        )}

                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wishlist