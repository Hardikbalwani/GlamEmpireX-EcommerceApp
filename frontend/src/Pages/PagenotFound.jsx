import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import '../CSS modules/pagenotfound.css'

const PagenotFound = () => {
  return (
    <>
    <Navbar />
    <div className="pnf">
        <h1 className='pnf-title'>404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to='/' className="pnf-btn">Go Back</Link>
    </div>
    <Footer />
    </>
  )
}

export default PagenotFound