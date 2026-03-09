import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BsX, BsTrash, BsArrowLeft } from "react-icons/bs";
import Swal from 'sweetalert2'; // SweetAlert import kiya

const CartSidebar = () => {
  const { cartItems, isSidebarOpen, setIsSidebarOpen, updateQuantity, removeItem, clearCart } = useCart();
  
  // Naya State: Check karne ke liye ke cart dikhana hai ya checkout form
  const [isCheckoutView, setIsCheckoutView] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace('$', ''));
    return total + (priceNumber * item.qty);
  }, 0);

  // Form Submit hone par yeh function chalega
  const handlePlaceOrder = (e) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye
    
    // SweetAlert ka popup
    Swal.fire({
      title: 'Order Placed Successfully! 🎉',
      text: 'Thank you for shopping with Great Chalkboard Co.',
      icon: 'success',
      confirmButtonText: 'Done',
      confirmButtonColor: 'var(--color-green)',
    }).then(() => {
      // Jab user "Done" par click kare:
      clearCart(); // 1. Cart khali kardo
      setIsCheckoutView(false); // 2. Form view band kardo
      setIsSidebarOpen(false); // 3. Sidebar close kardo
    });
  };

  // Jab bhi sidebar band ho toh usko wapis 'cart' view par reset kar dein
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setTimeout(() => setIsCheckoutView(false), 400); // Animation khatam hone ke baad reset karein
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="cart-overlay" onClick={handleCloseSidebar}></div>
      )}

      <div className={`cart-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
          <div className="d-flex align-items-center gap-2">
            {/* Agar checkout view hai toh 'Back' button dikhayein */}
            {isCheckoutView && (
              <BsArrowLeft 
                size={24} 
                style={{ cursor: 'pointer', color: 'var(--color-green)' }} 
                onClick={() => setIsCheckoutView(false)} 
              />
            )}
            <h4 className="mb-0" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-green)', fontWeight: 'bold' }}>
              {isCheckoutView ? 'Checkout' : 'Your Cart'}
            </h4>
          </div>
          <BsX size={32} style={{ cursor: 'pointer', color: '#333' }} onClick={handleCloseSidebar} />
        </div>

        {/* Agar isCheckoutView FALSE hai toh Cart Items dikhayein */}
        {!isCheckoutView ? (
          <>
            <div className="p-4 flex-grow-1" style={{ overflowY: 'auto' }}>
              {cartItems.length === 0 ? (
                <div className="text-center mt-5 text-muted">
                  <h5>Your cart is empty.</h5>
                  <p>Looks like you haven't added any curriculums yet.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="d-flex align-items-center mb-4 pb-3 border-bottom">
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-bold" style={{ color: '#111' }}>{item.title}</h6>
                      <p className="mb-2 text-muted" style={{ fontSize: '0.95rem' }}>{item.price}</p>
                      
                      <div className="d-flex align-items-center gap-3 mt-2">
                        <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span className="fw-bold" style={{ width: '20px', textAlign: 'center' }}>{item.qty}</span>
                        <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                    <button 
                      className="btn p-2 rounded-circle ms-3" 
                      style={{ backgroundColor: '#FDECEB', color: '#E76F51', border: 'none' }}
                      onClick={() => removeItem(item.id)}
                    >
                      <BsTrash size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-4 border-top bg-light">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fw-bold fs-5" style={{ color: '#555' }}>Total:</span>
                  <span className="fw-bold fs-4" style={{ color: 'var(--color-green)' }}>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                {/* Checkout button click karne par view change hoga */}
                <button 
                  className="custom-btn btn-orange w-100 py-3 fs-5"
                  onClick={() => setIsCheckoutView(true)}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        ) : (
          /* ================= Agar isCheckoutView TRUE hai toh FORM dikhayein ================= */
          <div className="p-4 flex-grow-1 d-flex flex-column" style={{ overflowY: 'auto' }}>
            <form onSubmit={handlePlaceOrder} className="d-flex flex-column flex-grow-1">
              
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input type="text" className="form-control p-2" required placeholder="John Doe" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email Address</label>
                <input type="email" className="form-control p-2" required placeholder="john@example.com" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Shipping Address</label>
                <textarea className="form-control p-2" rows="3" required placeholder="123 Education St..."></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold">Card Number</label>
                <input type="text" className="form-control p-2" required placeholder="XXXX-XXXX-XXXX-XXXX" />
              </div>

              {/* Total amount for confirmation */}
              <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-light rounded">
                <span className="fw-bold">Amount to Pay:</span>
                <span className="fw-bold fs-5" style={{ color: 'var(--color-green)' }}>${totalPrice.toFixed(2)}</span>
              </div>

              {/* Submit Button */}
              <button type="submit" className="custom-btn btn-orange w-100 py-3 fs-5 mt-auto">
                Place Order
              </button>
            </form>
          </div>
        )}

      </div>
    </>
  );
};

export default CartSidebar;