import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// 1. Apne CartProvider ko import kiya
import { CartProvider } from './context/CartContext.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Puri App ko CartProvider ke andar wrap kar diya */}
    <CartProvider> 
      <App />
    </CartProvider>
  </React.StrictMode>,
)