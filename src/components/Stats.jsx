import React from 'react';
import { BsMortarboard, BsBook, BsAward } from "react-icons/bs";

const Stats = () => {
  // Yeh hamara data hai. Humne isko ek array mein rakh liya taake code repeat na ho (DRY Rule)
  const statsData = [
    {
      id: 1,
      icon: <BsMortarboard size={28} />,
      number: "5,000+",
      text: "Students Served"
    },
    {
      id: 2,
      icon: <BsBook size={28} />,
      number: "12",
      text: "Curriculum Editions"
    },
    {
      id: 3,
      icon: <BsAward size={28} />,
      number: "25+",
      text: "Years of Excellence"
    }
  ];

  return (
    // mt-5 (margin-top) taake Hero section se thoda fasla rahay
    <section className="container mt-5 pt-4">
      {/* g-4 ka matlab hai columns ke darmiyan gap */}
      <div className="row g-4">
        
        {/* .map() function hamare data ke har item ke liye khud ba khud card bana dega */}
        {statsData.map((stat) => (
          // col-12: Mobile par poori width lega (1 column)
          // col-md-4: Tablet aur Laptop par screen ke 3 hissay kar dega (3 columns)
          <div key={stat.id} className="col-12 col-md-4">
            
            <div className="stat-card bg-white d-flex align-items-center p-4 rounded-4 shadow-sm h-100">
              
              {/* Light Green Icon Box */}
              <div className="icon-box d-flex justify-content-center align-items-center rounded-3 me-4">
                {stat.icon}
              </div>
              
              {/* Text aur Numbers */}
              <div>
                <h3 className="mb-1 stat-number">{stat.number}</h3>
                <p className="mb-0 stat-text">{stat.text}</p>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;