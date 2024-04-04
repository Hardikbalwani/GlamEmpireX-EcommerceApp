import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../CSS modules/main.css'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet"
import steptodownImage from '../assets/steptodown.com693636.jpg';
import displayimproveImage from '../assets/beauty-display-improve.jpg';

import 'react-toastify/dist/ReactToastify.css';

const Home = ({title , description , keywords, author}) => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name="description" content={description} />
                <meta name="keyword" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>

            
            <Navbar />
            <div className="main-content d-flex container">
                <div className="main-desc">
                    <h1><b>Blossom with Our Beauty Products!</b></h1>
                    <p>Experience a journey of self-love and self-discovery with our handpicked beauty products. Unleash your inner beauty and let it shine through, because you are worth it.
                    </p>
                    <Link to="/products"><button className='mybtn'>Shop Now</button></Link>
                </div>
                <div className="main-image">
                    <img src={steptodownImage} alt="" />
                </div>
            </div>


            {/* deals section  */}
            <div className="deals-heading container">
                <h3>Deals of the day</h3>
                <Link to="/products">See all</Link>
            </div>
            <div className="deals-section container">
                <div className="deals-card card">
                    <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/1120837/zleh9rRp_4-1120837_1.jpg?dpr=1" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title brand">beardo</h5>
                        <p className="card-text product-desc">Beardo Whisky Smoke Bourbon Eau De Parfum (50ml)</p>
                        <h6 className="card-subtitle mb-2 text-muted price">₹249</h6>

                    </div>
                </div>
                <div className="deals-card card">
                    <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/revlon/942022/0/B9QVpOwNUt-zDWj60FeXO-6c3VTT7KGVE-1.jpg?dpr=1" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title brand">Revlon</h5>
                        <p className="card-text product-desc">Revlon One Stroke Defining Eyeliner - Blackest Black (1.2g)</p>
                        <h6 className="card-subtitle mb-2 text-muted price">₹497</h6>
                    </div>
                </div>
                <div className="deals-card card">
                    <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/958034/G6b9vxwsxW-1.png?dpr=1" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title brand">Cadiveu</h5>
                        <p className="card-text product-desc">Cadiveu - Acai Oil (110ml)</p>
                        <h6 className="card-subtitle mb-2 text-muted price">₹2,072</h6>
                    </div>
                </div>
                <div className="deals-card card">
                    <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/995962/NAcOD-SIkA-995962_1.jpg?dpr=1" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title brand">Re'equil</h5>
                        <p className="card-text product-desc">Re'equil Oil Control Face Wash (200ml)</p>
                        <h6 className="card-subtitle mb-2 text-muted price">₹343</h6>
                    </div>
                </div>
            </div>
            <div className="container">
            <figure className="improve-display">
                     <img className="improve-display-img" src={displayimproveImage} alt="" />
                     <figcaption className="improve-caption">Grace in Every Stride</figcaption>
            </figure>
            </div>

            {/* Category section  */}
            <div className="category-heading container">
                <h3>Shop by category</h3>
                <Link to="/products">See all</Link>
            </div>

            <div className="category-section container">
                <div className="category-type face">
                    <div className="img-container">
                        <img src="https://cdn.shopify.com/s/files/1/0107/2952/1233/files/face-banner-1.jpg?v=1582638105" alt="" />
                        <div className="img-content">
                            <h3>Face</h3>
                            <Link to="/products" className="btn btn-primary">Face</Link>
                        </div>
                    </div>
                </div>

                <div className="category-type lips">
                    <div className="img-container">
                        <img src="https://cdn.shopify.com/s/files/1/0107/2952/1233/files/lips-banner-1.jpg?v=1582638105" alt="" />
                        <div className="img-content">
                            <h3>Lips</h3>
                            <Link to="/products" className="btn btn-primary">Lips</Link>
                        </div>
                    </div>
                </div>


                <div className="category-type Eyes">
                    <div className="img-container">
                        <img src="https://cdn.shopify.com/s/files/1/0107/2952/1233/files/eyes-banner-1.jpg?v=1582638105" alt="" />
                        <div className="img-content">
                            <h3>Eyes</h3>
                            <Link to="/products" className="btn btn-primary">Eyes</Link>
                        </div>
                    </div>
                </div>
                <div className="category-type Nails">
                    <div className="img-container">
                        <img src="https://cdn.shopify.com/s/files/1/0107/2952/1233/files/nails-banner-1.jpg?v=1582638104" alt="" />
                        <div className="img-content">
                            <h3>Nails</h3>
                            <Link to="/products" className="btn btn-primary">Nails</Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

Home.defaultProps = {
    title: 'GlamEmpireX - "Unveil Your Inner Beauty with Our Premium Cosmetics',
    description: 'mern stack project',
    keywords: 'mern,react,node,mogodb,beauty products, grooming , Lipstick',
    author: 'Hardik Balwani'
}

export default Home