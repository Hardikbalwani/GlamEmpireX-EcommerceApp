import React from 'react'
// import { useAuth } from '../context/auth'
import Navbar from './Navbar'
import Footer from './Footer'
import '../CSS modules/products.css'
import image1 from '../images/christin-hume-0MoF-Fe0w0A-unsplash.jpg'
import image2 from '../images/element5-digital-ceWgSMd8rvQ-unsplash.jpg'
import image3 from '../images/joanna-kosinska-mVdzV_HTyH4-unsplash.jpg'
import image4 from '../images/pexels-moose-photos-1029896.jpg'
import image5 from '../images/pexels-shiny-diamond-3373738.jpg'
import image6 from '../images/pexels-alesia-kozik-7797449.jpg'
import image7 from '../images/photo-1586220742613-b731f66f7743.avif'
import image8 from '../images/rosa-rafael-pxax5WuM7eY-unsplash.jpg'

const Products = () => {
  // const  { auth, setAuth } = useAuth();
  return (
    <>
      <Navbar />
      <div className="products-container">
        <div className="products-side-panel">
          <button className="products-btn">Clear Filters</button>
          <div className="categories-section">
            <h2>Categories</h2>
            <ul className='list-items'>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">Face</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">Eyes</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">Ears</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">Lips</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">Nose</label>
                </div>
              </li>

            </ul>

          </div>
          <div className="Price-range-section">
            <h3>Price Range: $200</h3>
            <div>
              <input className="PriceRangeFilter_inputRange__TGHgQ" type="range" name="priceRange" min="10" max="200" step="10" value="200" />
            </div>
          </div>

          <div className="SortBy-section">
            <h2>Sort By:</h2>
            <ul className='list-items'>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">Low to High</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">High to Low</label>
                </div>
              </li>
            </ul>

          </div>
          <div className="Rating-section">
            <h2>Rating</h2>
            <ul className='list-items'>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">4 Stars & above</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">3 Stars & above</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">2 Stars & above</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">1 Stars & above</label>
                </div>
              </li>


            </ul>

          </div>
        </div>

        <div className="separator">
        </div>

        <div className="products-main-side">
          <h1> <strong> Featured Products </strong> <span>(Showing 18 Products) </span></h1>
          <div className="cards">
            <div className="ProductListing_productCard__1kVwy">
              <div className="ProductListing_cardBadge__IUAcG">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ProductListing_bookmarkBadge__tGyux" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                </svg>
                <span className="ProductListing_cardDiscount__618xO">2% OFF</span>
              </div>
              <img className="ProductListing_productImage__hpByi" src={image1} alt="game-banner" />
              <div className="ProductListing_cardTitleWrapper__1cWA2">
                <h2 className="ProductListing_title__vogs2">Essential Oil for Relaxation</h2>
                <small className="ProductListing_vendor__s4zg5">Exxon Mobil</small>
              </div>
              <p className="ProductListing_cardPrice__evk5D">$<strike>49.99</strike>
                <span className="ProductListing_cardNewPrice__iJSO5">48.99</span>/-</p>
              <div className="ProductListing_btnsWrapper__S7FUN">
                <button className="{ undefined ProductListing_buyButton__wnDyg }" fdprocessedid="sf3pp8">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>Add to Cart</button>
                <button className="{ ProductListing_wishlist__0pSHd ProductListing_buyButton__wnDyg }" fdprocessedid="jizvu">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg></button></div>
              <div className="ProductListing_rating__nckA8 ProductListing_ratingSuccess__cdXmI">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                  </path></svg>4.2</div></div>
            <div className="ProductListing_productCard__1kVwy">
              <div className="ProductListing_cardBadge__IUAcG">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ProductListing_bookmarkBadge__tGyux" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                </svg>
                <span className="ProductListing_cardDiscount__618xO">4% OFF</span>
              </div>
              <img className="ProductListing_productImage__hpByi" src={image2} alt="game-banner" />
              <div className="ProductListing_cardTitleWrapper__1cWA2">
                <h2 className="ProductListing_title__vogs2">Flawless Finish Powder</h2>
                <small className="ProductListing_vendor__s4zg5">Celeste Cosmetics</small>
              </div>
              <p className="ProductListing_cardPrice__evk5D">$<strike>59.99</strike>
                <span className="ProductListing_cardNewPrice__iJSO5">38.99</span>/-</p>
              <div className="ProductListing_btnsWrapper__S7FUN">
                <button className="{ undefined ProductListing_buyButton__wnDyg }" fdprocessedid="sf3pp8">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>Add to Cart</button>
                <button className="{ ProductListing_wishlist__0pSHd ProductListing_buyButton__wnDyg }" fdprocessedid="jizvu">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg></button></div>
              <div className="ProductListing_rating__nckA8 ProductListing_ratingSuccess__cdXmI">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                  </path></svg>4.8</div></div>
            <div className="ProductListing_productCard__1kVwy">
              <div className="ProductListing_cardBadge__IUAcG">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ProductListing_bookmarkBadge__tGyux" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                </svg>
                <span className="ProductListing_cardDiscount__618xO">15% OFF</span>
              </div>
              <img className="ProductListing_productImage__hpByi" src={image3} alt="game-banner" />
              <div className="ProductListing_cardTitleWrapper__1cWA2">
                <h2 className="ProductListing_title__vogs2">Velvet Kiss Lipstick</h2>
                <small className="ProductListing_vendor__s4zg5">Muse Cosmetics</small>
              </div>
              <p className="ProductListing_cardPrice__evk5D">$<strike>89.99</strike>
                <span className="ProductListing_cardNewPrice__iJSO5">68.99</span>/-</p>
              <div className="ProductListing_btnsWrapper__S7FUN">
                <button className="{ undefined ProductListing_buyButton__wnDyg }" fdprocessedid="sf3pp8">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>Add to Cart</button>
                <button className="{ ProductListing_wishlist__0pSHd ProductListing_buyButton__wnDyg }" fdprocessedid="jizvu">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg></button></div>
              <div className="ProductListing_rating__nckA8 ProductListing_ratingSuccess__cdXmI">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                  </path></svg>4.5</div></div>
            <div className="ProductListing_productCard__1kVwy">
              <div className="ProductListing_cardBadge__IUAcG">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ProductListing_bookmarkBadge__tGyux" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                </svg>
                <span className="ProductListing_cardDiscount__618xO">20% OFF</span>
              </div>
              <img className="ProductListing_productImage__hpByi" src={image4} alt="game-banner" />
              <div className="ProductListing_cardTitleWrapper__1cWA2">
                <h2 className="ProductListing_title__vogs2">Nourishing Hand Lotion</h2>
                <small className="ProductListing_vendor__s4zg5">Natural Hands</small>
              </div>
              <p className="ProductListing_cardPrice__evk5D">$<strike>99.99</strike>
                <span className="ProductListing_cardNewPrice__iJSO5">98.99</span>/-</p>
              <div className="ProductListing_btnsWrapper__S7FUN">
                <button className="{ undefined ProductListing_buyButton__wnDyg }" fdprocessedid="sf3pp8">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>Add to Cart</button>
                <button className="{ ProductListing_wishlist__0pSHd ProductListing_buyButton__wnDyg }" fdprocessedid="jizvu">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg></button></div>
              <div className="ProductListing_rating__nckA8 ProductListing_ratingSuccess__cdXmI">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                  </path></svg>3.2</div></div>
            <div className="ProductListing_productCard__1kVwy">
              <div className="ProductListing_cardBadge__IUAcG">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ProductListing_bookmarkBadge__tGyux" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                </svg>
                <span className="ProductListing_cardDiscount__618xO">30% OFF</span>
              </div>
              <img className="ProductListing_productImage__hpByi" src={image5} alt="game-banner" />
              <div className="ProductListing_cardTitleWrapper__1cWA2">
                <h2 className="ProductListing_title__vogs2">Luxe Matte Lipstick</h2>
                <small className="ProductListing_vendor__s4zg5">Radiant Rouge</small>
              </div>
              <p className="ProductListing_cardPrice__evk5D">$<strike>109.99</strike>
                <span className="ProductListing_cardNewPrice__iJSO5">108.99</span>/-</p>
              <div className="ProductListing_btnsWrapper__S7FUN">
                <button className="{ undefined ProductListing_buyButton__wnDyg }" fdprocessedid="sf3pp8">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>Add to Cart</button>
                <button className="{ ProductListing_wishlist__0pSHd ProductListing_buyButton__wnDyg }" fdprocessedid="jizvu">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg></button></div>
              <div className="ProductListing_rating__nckA8 ProductListing_ratingSuccess__cdXmI">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                  </path></svg>4.6</div></div>
            <div className="ProductListing_productCard__1kVwy">
              <div className="ProductListing_cardBadge__IUAcG">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ProductListing_bookmarkBadge__tGyux" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                </svg>
                <span className="ProductListing_cardDiscount__618xO">50% OFF</span>
              </div>
              <img className="ProductListing_productImage__hpByi" src={image6} alt="game-banner" />
              <div className="ProductListing_cardTitleWrapper__1cWA2">
                <h2 className="ProductListing_title__vogs2">Luxe Glass Dropper Bottle</h2>
                <small className="ProductListing_vendor__s4zg5">EverBloom Botanicals</small>
              </div>
              <p className="ProductListing_cardPrice__evk5D">$<strike>59.99</strike>
                <span className="ProductListing_cardNewPrice__iJSO5">58.99</span>/-</p>
              <div className="ProductListing_btnsWrapper__S7FUN">
                <button className="{ undefined ProductListing_buyButton__wnDyg }" fdprocessedid="sf3pp8">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>Add to Cart</button>
                <button className="{ ProductListing_wishlist__0pSHd ProductListing_buyButton__wnDyg }" fdprocessedid="jizvu">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg></button></div>
              <div className="ProductListing_rating__nckA8 ProductListing_ratingSuccess__cdXmI">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                  </path></svg>4.1</div></div>
            <div className="ProductListing_productCard__1kVwy">
              <div className="ProductListing_cardBadge__IUAcG">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ProductListing_bookmarkBadge__tGyux" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                </svg>
                <span className="ProductListing_cardDiscount__618xO">30% OFF</span>
              </div>
              <img className="ProductListing_productImage__hpByi" src={image7} alt="game-banner" />
              <div className="ProductListing_cardTitleWrapper__1cWA2">
                <h2 className="ProductListing_title__vogs2">Nourishing Hand lotion</h2>
                <small className="ProductListing_vendor__s4zg5">Natural hands</small>
              </div>
              <p className="ProductListing_cardPrice__evk5D">$<strike>79.99</strike>
                <span className="ProductListing_cardNewPrice__iJSO5">78.99</span>/-</p>
              <div className="ProductListing_btnsWrapper__S7FUN">
                <button className="{ undefined ProductListing_buyButton__wnDyg }" fdprocessedid="sf3pp8">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>Add to Cart</button>
                <button className="{ ProductListing_wishlist__0pSHd ProductListing_buyButton__wnDyg }" fdprocessedid="jizvu">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg></button></div>
              <div className="ProductListing_rating__nckA8 ProductListing_ratingSuccess__cdXmI">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                  </path></svg>4.0</div></div>
            <div className="ProductListing_productCard__1kVwy">
              <div className="ProductListing_cardBadge__IUAcG">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ProductListing_bookmarkBadge__tGyux" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                </svg>
                <span className="ProductListing_cardDiscount__618xO">70% OFF</span>
              </div>
              <img className="ProductListing_productImage__hpByi" src={image8} alt="game-banner" />
              <div className="ProductListing_cardTitleWrapper__1cWA2">
                <h2 className="ProductListing_title__vogs2">Makeup Brush Set</h2>
                <small className="ProductListing_vendor__s4zg5">softonic</small>
              </div>
              <p className="ProductListing_cardPrice__evk5D">$<strike>69.99</strike>
                <span className="ProductListing_cardNewPrice__iJSO5">68.99</span>/-</p>
              <div className="ProductListing_btnsWrapper__S7FUN">
                <button className="{ undefined ProductListing_buyButton__wnDyg }" fdprocessedid="sf3pp8">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>Add to Cart</button>
                <button className="{ ProductListing_wishlist__0pSHd ProductListing_buyButton__wnDyg }" fdprocessedid="jizvu">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg></button></div>
              <div className="ProductListing_rating__nckA8 ProductListing_ratingSuccess__cdXmI">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                  </path></svg>4.9</div></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Products