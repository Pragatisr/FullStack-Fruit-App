import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { ProductProvider } from './context/ProductContext';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
         <ProductProvider>
            <App />
         </ProductProvider>

      </BrowserRouter>
   </StrictMode>
)
