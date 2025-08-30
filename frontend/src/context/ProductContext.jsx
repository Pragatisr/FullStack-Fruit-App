import { createContext, useContext, useEffect, useState,useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const didRun = useRef(false);
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/products",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        setProducts(res.data);
        toast.success("Products fetched successfully yay");
      } catch (err) {
        toast.error("No Data Available");
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
