import React from 'react';
import { BsBook, BsStarFill, BsCart2, BsTelephone } from "react-icons/bs";

const Shop = () => {
  // Cards ka saara data yahan ek array mein hai. 
  // Maine badge colors bhi yahi define kar diye hain taake exact image jaisa look aaye.
  const shopData = [
    {
      id: 1,
      badge: "Beginner",
      badgeBg: "#E8F0EC", // Light Green
      badgeColor: "#1B4D3E",
      rating: "4.9",
      title: "Vietnamese Foundations",
      desc: "Start from zero — alphabet, tones, and basic conversation.",
      price: "$49.99"
    },
    {
      id: 2,
      badge: "Intermediate",
      badgeBg: "#F8B82A", // Yellow
      badgeColor: "#111",
      rating: "4.8",
      title: "Conversational Vietnamese",
      desc: "Build fluency with real-world dialogues and cultural context.",
      price: "$59.99"
    },
    {
      id: 3,
      badge: "Advanced",
      badgeBg: "#FDECEB", // Light Pink/Red
      badgeColor: "#E76F51",
      rating: "4.9",
      title: "Advanced Vietnamese",
      desc: "Master complex grammar, literature excerpts, and formal writing.",
      price: "$69.99"
    },
    {
      id: 4,
      badge: "Professional",
      badgeBg: "#E8F0EC", // Light Green
      badgeColor: "#1B4D3E",
      rating: "5.0",
      title: "Vietnamese for Educators",
      desc: "Teaching guides, lesson plans, and assessment tools for instructors.",
      price: "$79.99"
    },
    {
      id: 5,
      badge: "All Levels",
      badgeBg: "#F8B82A", // Yellow
      badgeColor: "#111",
      rating: "4.9",
      title: "Culture & Language Bundle",
      desc: "A comprehensive bundle covering language, history, and cultural immersion.",
      price: "$99.99"
    },
    {
      id: 6,
      badge: "Supplementary",
      badgeBg: "#FDECEB", // Light Pink/Red
      badgeColor: "#E76F51",
      rating: "4.7",
      title: "Student Workbook Set",
      desc: "Practice exercises, quizzes, and writing prompts for any level.",
      price: "$29.99"
    }
  ];

  return (
    // animate-up class lagayi hai taake page khulte hi smoothly upar aaye
    <div className="container animate-up" style={{ marginTop: '130px', marginBottom: '80px' }}>
      
      {/* ================= Header Section ================= */}
      <div className="text-center mb-5 pb-3">
        <h1 className="shop-title mb-3">Shop Curriculums</h1>
        <p className="shop-subtitle mx-auto">
          Browse our professionally developed Vietnamese language curriculum packages <br className="d-none d-md-block" />
          — each crafted for clarity, engagement, and real results.
        </p>
      </div>

      {/* ================= Cards Grid Section ================= */}
      <div className="row g-4 mb-5 pb-4">
        {shopData.map((item) => (
          // Laptop par 3 columns (col-lg-4), Tablet par 2 (col-md-6), Mobile par 1 (col-12)
          <div key={item.id} className="col-12 col-md-6 col-lg-4">
            
            <div className="shop-card h-100 p-4 d-flex flex-column bg-white rounded-4">
              
              {/* Top Row: Badge & Rating */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span 
                  className="shop-badge" 
                  style={{ backgroundColor: item.badgeBg, color: item.badgeColor }}
                >
                  {item.badge}
                </span>
                <div className="shop-rating d-flex align-items-center gap-1">
                  <BsStarFill color="#F8B82A" size={14} />
                  <span className="fw-bold">{item.rating}</span>
                </div>
              </div>

              {/* Big Icon Box */}
              <div className="shop-icon-box d-flex justify-content-center align-items-center mb-4 rounded-3">
                <BsBook size={40} color="var(--color-green)" />
              </div>

              {/* Text Area */}
              <div className="flex-grow-1">
                <h3 className="shop-card-title mb-2">{item.title}</h3>
                <p className="shop-card-desc mb-4">{item.desc}</p>
              </div>

              {/* Bottom Row: Price & Button */}
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="shop-price">{item.price}</span>
                <button className="btn-add-cart d-flex align-items-center gap-2">
                  <BsCart2 size={18} />
                  <span>Add</span>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* ================= Bottom CTA Section ================= */}
      <div className="text-center mt-4">
        <p className="shop-cta-text mb-3">Need help choosing the right curriculum?</p>
        <a href="tel:1234567890" className="btn-shop-cta d-inline-flex align-items-center gap-2">
          <BsTelephone size={18} />
          <span>Call Us — (123) 456-7890</span>
        </a>
      </div>

    </div>
  );
};

export default Shop;