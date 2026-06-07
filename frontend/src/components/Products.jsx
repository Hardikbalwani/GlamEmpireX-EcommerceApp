import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../CSS modules/products.css'
import { useCart } from '../context/CartContext'  // 👈 add this
import { useAuth } from '../context/auth'          // 👈 add this
import { useNavigate } from 'react-router-dom'     // 👈 add this

// 👇 import your images same as before
import image1 from '../images/christin-hume-0MoF-Fe0w0A-unsplash.jpg'
import image2 from '../images/element5-digital-ceWgSMd8rvQ-unsplash.jpg'
import image3 from '../images/joanna-kosinska-mVdzV_HTyH4-unsplash.jpg'
import image4 from '../images/pexels-moose-photos-1029896.jpg'
import image5 from '../images/pexels-shiny-diamond-3373738.jpg'
import image6 from '../images/pexels-alesia-kozik-7797449.jpg'
import image7 from '../images/photo-1586220742613-b731f66f7743.avif'
import image8 from '../images/rosa-rafael-pxax5WuM7eY-unsplash.jpg'

// 👇 Step 1: Put all product data in one place
// _id is TEMPORARY — later this will come from MongoDB
// for now we use fake IDs just to test the UI
const hardcodedProducts = [
    {
        _id: '6a2426497a6b73a9d675b1c1',
        name: 'Essential Oil for Relaxation',
        vendor: 'Exxon Mobil',
        oldPrice: 49.99,
        price: 48.99,
        discount: '2% OFF',
        rating: 4.2,
        image: 'https://res.cloudinary.com/dtpj3avfk/image/upload/v1780753969/glamempirex/cdawuikvi0evo6xarrkt.jpg',
        category: 'Face'
    },
    {
        _id: '6a2426497a6b73a9d675b1c2',
        name: 'Flawless Finish Powder',
        vendor: 'Celeste Cosmetics',
        oldPrice: 59.99,
        price: 38.99,
        discount: '4% OFF',
        rating: 4.8,
        image: 'https://res.cloudinary.com/dtpj3avfk/image/upload/v1780753974/glamempirex/gtzqvrvlwvjkkifm0aaj.jpg',
        category: 'Face'
    },
    {
        _id: '6a2426497a6b73a9d675b1c3',
        name: 'Velvet Kiss Lipstick',
        vendor: 'Muse Cosmetics',
        oldPrice: 89.99,
        price: 68.99,
        discount: '15% OFF',
        rating: 4.5,
        image: 'https://res.cloudinary.com/dtpj3avfk/image/upload/v1780753977/glamempirex/z7urz3zonnwees5xvk18.jpg',
        category: 'Lips'
    },
    {
        _id: '6a2426497a6b73a9d675b1c4',
        name: 'Nourishing Hand Lotion',
        vendor: 'Natural Hands',
        oldPrice: 99.99,
        price: 98.99,
        discount: '20% OFF',
        rating: 3.2,
        image: 'https://res.cloudinary.com/dtpj3avfk/image/upload/v1780753980/glamempirex/zecarjxmx2uvlqtklurt.jpg',
        category: 'Face'
    },
    {
        _id: '6a2426497a6b73a9d675b1c5',
        name: 'Luxe Matte Lipstick',
        vendor: 'Radiant Rouge',
        oldPrice: 109.99,
        price: 108.99,
        discount: '30% OFF',
        rating: 4.6,
        image: 'https://res.cloudinary.com/dtpj3avfk/image/upload/v1780753983/glamempirex/bgfyibataasl0grumf07.jpg',
        category: 'Lips'
    },
    {
        _id: '6a2426497a6b73a9d675b1c6',
        name: 'Luxe Glass Dropper Bottle',
        vendor: 'EverBloom Botanicals',
        oldPrice: 59.99,
        price: 58.99,
        discount: '50% OFF',
        rating: 4.1,
        image: 'https://res.cloudinary.com/dtpj3avfk/image/upload/v1780753987/glamempirex/ukyin6qj9rjt6fgkngwr.jpg',
        category: 'Eyes'
    },
    {
        _id: '6a2426497a6b73a9d675b1c7',
        name: 'Nourishing Hand Lotion',
        vendor: 'Natural Hands',
        oldPrice: 79.99,
        price: 78.99,
        discount: '30% OFF',
        rating: 4.0,
        image: 'https://res.cloudinary.com/dtpj3avfk/image/upload/v1780753988/glamempirex/ngv9upb8pi8lqagzq50f.avif',
        category: 'Face'
    },
    {
        _id: '6a2426497a6b73a9d675b1c8',
        name: 'Makeup Brush Set',
        vendor: 'Softonic',
        oldPrice: 69.99,
        price: 68.99,
        discount: '70% OFF',
        rating: 4.9,
        image: 'https://res.cloudinary.com/dtpj3avfk/image/upload/v1780753992/glamempirex/b20fakwf040drd1soask.jpg',
        category: 'Eyes'
    },
]

const Products = () => {
    const [showFilters, setShowFilters] = useState(false)
    const { addToCart } = useCart()       // 👈 get addToCart from cart memory
    const { auth } = useAuth()            // 👈 get auth to check if logged in
    const navigate = useNavigate()        // 👈 to redirect to login if needed

    // 👇 Step 2: Handle Add to Cart button click
    const handleAddToCart = (product) => {
        // if user is not logged in → send them to login page
        if (!auth?.token) {
            navigate('/login')
            return
        }
        // if logged in → add to cart
        // NOTE: this uses temp_id for now
        // after seeding products to DB, this will use real MongoDB _id
        addToCart(product._id)
    }

    return (
        <>
            <Navbar />
            <div className="filter-toggle-container">
                <button
                    className="filter-toggle-btn"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <i className="fa-solid fa-filter"></i>
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
            </div>

            <div className="products-container">
                <div className={`products-side-panel ${showFilters ? 'open' : ''}`}>
                    {/* your filters stay exactly the same */}
                    <button className="products-btn">Clear Filters</button>
                    <div className="categories-section">
                        <h2>Categories</h2>
                        <ul className='list-items'>
                            <li>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Face</label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Eyes</label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Lips</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="Price-range-section">
                        <h3>Price Range: $200</h3>
                        <input type="range" name="priceRange" min="10" max="200" step="10" defaultValue="200" />
                    </div>
                </div>

                <div className="separator"></div>

                <div className="products-main-side">
                    <h1>
                        <strong>Featured Products</strong>
                        <span> (Showing {hardcodedProducts.length} Products)</span>
                    </h1>

                    {/* 👇 Step 3: Use .map() instead of copy pasting cards */}
                    <div className="cards">
                        {hardcodedProducts.map((product) => (
                            <div className="ProductListing_productCard__1kVwy" key={product._id}>

                                {/* Discount Badge */}
                                <div className="ProductListing_cardBadge__IUAcG">
                                    <span className="ProductListing_cardDiscount__618xO" style={{backgroundColor: 'red'}}>
                                        {product.discount}
                                    </span>
                                </div>

                                {/* Product Image */}
                                <img
                                    className="ProductListing_productImage__hpByi"
                                    src={product.image}
                                    alt={product.name}
                                />

                                {/* Product Info */}
                                <div className="ProductListing_cardTitleWrapper__1cWA2">
                                    <h2 className="ProductListing_title__vogs2">
                                        {product.name}
                                    </h2>
                                    <small className="ProductListing_vendor__s4zg5">
                                        {product.vendor}
                                    </small>
                                </div>

                                {/* Price */}
                                <p className="ProductListing_cardPrice__evk5D">
                                    $<strike>{product.oldPrice}</strike>
                                    <span className="ProductListing_cardNewPrice__iJSO5">
                                        {product.price}
                                    </span>/-
                                </p>

                                {/* Buttons */}
                                <div className="ProductListing_btnsWrapper__S7FUN">
                                    {/* 👇 Add to Cart — now actually works! */}
                                    <button
                                        className="ProductListing_buyButton__wnDyg"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    {/* Wishlist button */}
                                    <button className="ProductListing_wishlist__0pSHd ProductListing_buyButton__wnDyg">
                                        ♡
                                    </button>
                                </div>

                                {/* Rating */}
                                <div className="ProductListing_rating__nckA8 ProductListing_ratingSuccess__cdXmI">
                                    ⭐ {product.rating}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Products