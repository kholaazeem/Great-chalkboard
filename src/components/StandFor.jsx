import React from 'react';
import { BsBook, BsPeople, BsHeart, BsAward } from "react-icons/bs";

const StandFor = () => {
  // Cards ka data yahan array mein rakha hai
  const featuresData = [
    {
      id: 1,
      icon: <BsBook size={24} />,
      title: "Academic Rigor",
      text: "Every curriculum is built on proven pedagogical frameworks and reviewed by certified educators."
    },
    {
      id: 2,
      icon: <BsPeople size={24} />,
      title: "Inclusive Design",
      text: "We design for all learners — with large type, clear layouts, and accessible materials at every level."
    },
    {
      id: 3,
      icon: <BsHeart size={24} />,
      title: "Community First",
      text: "We believe language bridges cultures. Our mission is to connect communities through Vietnamese."
    },
    {
      id: 4,
      icon: <BsAward size={24} />,
      title: "Trusted Expertise",
      text: "Over 25 years of experience in language education, serving thousands of students nationwide."
    }
  ];

  return (
    <section className="container py-5 my-5">
      
      {/* ================= Heading Section ================= */}
      <div className="text-center mb-5 pb-3">
        <h2 className="stand-for-title">
          What We <span style={{ color: 'var(--color-orange)' }}>Stand For</span>
        </h2>
      </div>

      {/* ================= Cards Section ================= */}
      <div className="row g-4">
        {featuresData.map((feature) => (
          // col-12 for mobile (1 card per row), col-md-6 for laptop (2 cards per row)
          <div key={feature.id} className="col-12 col-md-6">
            
            {/* Card Content - Static rahega, koi hover nahi */}
            <div className="stand-card p-4 p-lg-5 h-100 d-flex gap-4">
              
              {/* Icon Box */}
              <div className="stand-icon-box flex-shrink-0 d-flex justify-content-center align-items-center">
                {feature.icon}
              </div>
              
              {/* Text Area */}
              <div>
                <h4 className="stand-card-title mb-2">{feature.title}</h4>
                <p className="stand-card-text mb-0">{feature.text}</p>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default StandFor;