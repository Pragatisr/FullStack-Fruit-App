import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import { useProducts } from "../context/ProductContext";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = useProducts();
  const navigate = useNavigate()
  useEffect(() => {
    const fetchCartItem = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:3001/cart/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (products.length > 0) {
          const updateCartItems = res.data?.items.map((cartItem) => {
            const product = products.find((p) => p.name === cartItem.name);
            return {
              ...cartItem,
              image: product?.image,
            };
          });
          setCartItems(updateCartItems);
          toast.success("Cart Items Fetched!");
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
        if (err?.response?.status === 403) {
          navigate('/login')

        }

      }
    };
    fetchCartItem();
  }, [products]);


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="container my-4">
        <h2 className="text-center mb-4">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <h4>Your cart is empty!</h4>
            <Link to="/" className="btn btn-success mt-3">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="card mb-3 shadow-sm"
                  style={{ borderRadius: "12px" }}
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-md-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded-start"
                        style={{ height: "120px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-success">
                          Rs {item.price} x {item.quantity}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Subtotal: Rs {item.price * item.quantity}
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 text-center">
                      <button className="btn btn-outline-danger btn-sm mb-2">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div
                className="card shadow-sm p-3"
                style={{ borderRadius: "12px" }}
              >
                <h5 className="mb-3">Order Summary</h5>
                <p className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>Rs {total}</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </p>
                <hr />
                <h5 className="d-flex justify-content-between">
                  <span>Total</span>
                  <span>Rs {total}</span>
                </h5>
                <button className="btn btn-success w-100 mt-3">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
