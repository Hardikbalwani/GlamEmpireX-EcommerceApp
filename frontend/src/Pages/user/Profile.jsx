import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import { toast } from 'react-toastify'
import '../../CSS modules/profile.css'

const Profile = () => {
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
    toast.success("Logged out successfully");
  }

  return (
    <>
      <Navbar />
      <div className="profile-content">
        <div className="profile-section">
          <h1 className="greeting">Welcome , {auth.user.name}</h1>
          <h2 className="user-details"><strong>Username:</strong> {auth.user.name}</h2>
          <h2 className="user-details"><strong>Email:</strong> {auth.user.email}</h2>
          <div className="d-flex justify-content-between">
            <Link to='/orders' className='mybtn'>MY ORDERS</Link>
            <Link to='/address' className='mybtn'>MY ADDRESS</Link>
            <Link to='/login' onClick={handleLogout} className='mybtn'>Logout</Link>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}




export default Profile;