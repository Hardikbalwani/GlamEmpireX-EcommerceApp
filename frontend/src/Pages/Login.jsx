import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../CSS modules/register.css'
import { toast } from 'react-toastify'
import { useNavigate, Link,useLocation } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../context/auth'

const Register = () => {
    // from submit function
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: '',
        });
        localStorage.removeItem('auth');
        toast.success("Logged out successfully");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });

            if (res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || "/")
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error("You need to sign up");
        }
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <Navbar />
            {!auth.user ? (
                <>
                    <div>
                        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                            <div className="container h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-lg-12 col-xl-11" style={{ paddingTop: '40px' }}>
                                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                                            <div className="card-body p-md-5">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <input
                                                                        type="email"
                                                                        id="form3Example3c"
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                        placeholder="Your Email"
                                                                        value={email}
                                                                        required
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <input
                                                                        type="password"
                                                                        id="form3Example4c"
                                                                        required
                                                                        onChange={(e) => setPassword(e.target.value)}
                                                                        value={password}
                                                                        placeholder="Your Password"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="d-flex justify-content-between mx-4 mb-3 mb-lg-4">
                                                                <button type="submit" className="btn mybtn btn-lg">
                                                                    Login
                                                                </button>
                                                                <Link to="/register">
                                                                    <button type="button" className="btn mybtn btn-lg">
                                                                        Register
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                        <img
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                            className="img-fluid"
                                                            alt="Sample"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            ) : (
                <>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                        <Link to="/login">
                            <button onClick={handleLogout} type="button" className="btn mybtn btn-lg">
                                Logout
                            </button>
                        </Link>

                    </div>
                </>
            )}

            <Footer />
        </>
    )
}

export default Register
