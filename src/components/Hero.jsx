import React from 'react';
import Button from './Button';
import { FaPhoneAlt, FaBookOpen, FaGraduationCap } from "react-icons/fa";

const Hero = () => {
  return (
    // mt-5 pt-5 isliye lagaya taake text navbar ke neechay na chhupe
    <section className="container" style={{ marginTop: '140px' }}>
      <div className="row align-items-center">
        
        {/* Left Column: Text Content */}
        {/* Mobile par center align (text-center), Laptop par left align (text-lg-start) */}
        <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 text-center text-lg-start">
          
          {/* Yellow Badge */}
          <div className="custom-badge mb-4 d-inline-flex align-items-center gap-2">
            <FaGraduationCap size={18} />
            <span>Vietnamese Language Curriculums</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="hero-heading mb-4">
            Learn Vietnamese <br className="d-none d-lg-block" />
            with Confidence & <span className="text-orange">Joy</span>
          </h1>
          
          {/* Paragraph */}
          <p className="hero-text mb-5 mx-auto mx-lg-0">
            Trusted high school curriculums crafted by experienced educators — designed for clarity, accessibility, and real progress.
          </p>
          
          {/* Buttons Area */}
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            <Button text="Call for Info" variant="primary" icon={<FaPhoneAlt />} />
            {/* Isme humne 'outline' variant pass kiya hai */}
            <Button text="Browse Curriculums" variant="outline" icon={<FaBookOpen />} />
          </div>

        </div>

        {/* Right Column: Image */}
        <div className="col-lg-6 col-md-12">
          {/* Main image ka link placeholder ke taur par dala hai, aap apni asal image laga sakti hain */}
          <img 
            src='hero-img.jpg'
            alt="Classroom Desk" 
            className="img-fluid hero-image"
          />
        </div>
        
      </div>
    </section>
  );
}

export default Hero;