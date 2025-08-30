import './App.css'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetail'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
          <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<ProductList />} />
                   <Route path="/product-detail/:id" element={<ProductDetails />} />
                    <Route path="/cart/" element={<Cart />} />
                    <Route path="/login/" element={<Login />} />
                    <Route path="/signup/" element={<Signup />} />
             
         </Routes>
    </>
  )
}

export default App
