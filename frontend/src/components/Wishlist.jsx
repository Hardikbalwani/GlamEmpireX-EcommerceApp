import Navbar from "./Navbar";
import Footer from "./Footer";
import '../CSS modules/wishlist.css'
import React from 'react'


const Wishlist = () => {
  return (
    <div>
        <div className="nav-container"> 
            <Navbar />
        </div>
        <div className="cart-page">
            <div className="cart-heading">
                <h5 className="h-5">My WishList</h5>
            </div>
            <div className="Cart_productsAndPrice__t5c0I">
                <section className="Cart_myProducts__p8Rax">
                    <div className="Cart_emptyCartMsgWrapper__xTvqO"><img src="https://res.cloudinary.com/dmlhtqirp/image/upload/v1688729256/BRUKart/empty_wishlist.gif" loading="lazy" alt="empty-cart" width="40%" />
                        <p className="Cart_emptyCartMsg__ADKpZ">Your Wishlist is Empty!
                            <div> Make something that will make us pleased. </div></p>
                        <a className="button Cart_shopnowButton__NWGjF" href="/products">Explore</a>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </div>
)
}

export default Wishlist

