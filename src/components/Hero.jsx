import React from 'react';
import Button from './Button';
import { FaPhoneAlt, FaBookOpen, FaGraduationCap } from "react-icons/fa";
// 1. React Router se useNavigate import karein
import { useNavigate } from 'react-router-dom'; 

const Hero = () => {
  // 2. Navigate function banayein
  const navigate = useNavigate(); 

  return (
    <section className="container animate-left" style={{ marginTop: '140px' }}>
      <div className="row align-items-center">
        
        <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 text-center text-lg-start">
          
          <div className="custom-badge mb-4 d-inline-flex align-items-center gap-2">
            <FaGraduationCap size={18} />
            <span>Vietnamese Language Curriculums</span>
          </div>
          
          <h1 className="hero-heading mb-4">
            Learn Vietnamese <br className="d-none d-lg-block" />
            with Confidence & <span className="text-orange">Joy</span>
          </h1>
          
          <p className="hero-text mb-5 mx-auto mx-lg-0">
            Trusted high school curriculums crafted by experienced educators — designed for clarity, accessibility, and real progress.
          </p>
          
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            <Button text="Call for Info" variant="primary" icon={<FaPhoneAlt />} />
            
            {/* 3. Yahan onClick mein navigate('/shop') laga diya! */}
            <Button 
              text="Browse Curriculums" 
              variant="outline" 
              icon={<FaBookOpen />} 
              onClick={() => navigate('/shop')} 
            />

          </div>

        </div>

        <div className="col-lg-6 col-md-12">
          <img 
            src="hero-img.jpg" 
            alt="Classroom Desk" 
            className="img-fluid hero-image"
          />
        </div>
        
      </div>
    </section>
  );
}

export default Hero;