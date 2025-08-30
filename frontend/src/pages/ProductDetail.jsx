import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Footer from '../components/Footer'
import { useProducts } from "../context/ProductContext";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


const ProductDetail = () => {
  const { products } = useProducts();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()

  const product = products.find((item) => item.key === Number(id));
  const addToCartHandler = async () => {
    const payload = {
      name: product?.name,
      price: product?.price,
      quantity: quantity
    }
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post('https://fruit-app-ii92.onrender.com/cart/add', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (response?.status === 200) {
        toast.success(response?.data?.message)
        navigate('/cart')
      }
    }
    catch (err) {
      toast.error(err?.response?.data?.message);
        if (err?.response?.status === 403) {
          navigate('/login')
        }
    }
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="card product-card">
          <img src={product.image} alt={product.name} className="card-img-top" />
          <div className="card-body text-center">
            <h3 className="card-title">{product.name}</h3>
            <h5 className="text-success">Rs.{product.price}</h5>
            <p className="card-text">{product.description}</p>
            <div className="mb-2">
              <button className="btn btn-outline-secondary btn-sm me-1" onClick={decreaseQuantity}>
                -
              </button>
              <span className="m-2">{quantity}</span>
              <button className="btn btn-outline-secondary btn-sm me-1" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <button className="btn btn-success" onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
