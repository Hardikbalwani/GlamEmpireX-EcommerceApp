import './App.css';
import PagenotFound from './Pages/PagenotFound';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom'
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login'
import Products from './components/Products'
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/user/Profile';
import PrivateRoute from './components/Routes/Private'
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';


function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<PrivateRoute />} >
        <Route path="" element={<Profile />}/>
      </Route>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/Wishlist" element={<Wishlist />}/>
      <Route path="/*" element={<PagenotFound />} />
    </Routes>
      <ToastContainer  autoClose={5000} position='bottom-right'/>
    </>
  );
}

export default App;
