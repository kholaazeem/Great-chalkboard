import React from 'react';
import { BsBook, BsTelephone, BsEnvelope, BsGeoAlt, BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    // Footer ka main wrapper jisme dark green color background hoga
    <footer className="footer-section">
      <div className="container">
        
        {/* ================= Top Section (3 Columns) ================= */}
        <div className="row g-4 mb-4">
          
          {/* Column 1: Logo & Description */}
          <div className="col-12 col-md-5 pe-md-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <BsBook size={24} color="white" />
              <h3 className="footer-brand mb-0">Great Chalkboard Co.</h3>
            </div>
            <p className="footer-text">
              High school Vietnamese language curriculums designed with care, clarity, and decades of teaching expertise.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-12 col-md-3">
            <h4 className="footer-heading mb-3">Quick Links</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Shop Curriculums</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="col-12 col-md-4">
            <h4 className="footer-heading mb-3">Get in Touch</h4>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li className="d-flex align-items-center gap-2 footer-text">
                <BsTelephone size={18} />
                <span>(123) 456-7890</span>
              </li>
              <li className="d-flex align-items-center gap-2 footer-text">
                <BsEnvelope size={18} />
                <span>hello@greatchalkboard.com</span>
              </li>
              <li className="d-flex align-items-center gap-2 footer-text">
                <BsGeoAlt size={18} />
                <span>123 Learning Lane, Education City, EC 10001</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= Divider Line ================= */}
        <hr className="footer-divider" />

        {/* ================= Bottom Section (Copyright & Button) ================= */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 gap-3">
          
          <p className="footer-text mb-0 text-center text-md-start">
            © 2026 Great Chalkboard Company. All rights reserved.
          </p>

          {/* Gradient Button */}
          <a href="tel:1234567890" className="footer-btn d-inline-flex align-items-center gap-2">
            <BsTelephoneFill color="#E76F51" /> {/* Icon mein wahi reddish/orange touch */}
            <span>Call Us Now — (123) 456-7890</span>
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;