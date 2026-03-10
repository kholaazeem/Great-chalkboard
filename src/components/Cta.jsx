import React from 'react';
import { BsTelephone } from "react-icons/bs";

const Cta = () => {
  return (
    // mt-5 aur mb-5 se iske upar aur neechay acha khasa fasla aayega
    <section className="container mt-5 mb-5 pb-4">
      
      {/* Yeh main dabba hai jisme gradient lagayenge */}
      <div className="cta-banner rounded-5 text-center shadow-sm">
        
        <h2 className="cta-heading text-white mb-3">
          Ready to Learn Vietnamese?
        </h2>
        
        {/* mx-auto se text center mein rahega, aur br tag se line break hogi */}
        <p className="cta-text text-white mb-4 mx-auto">
          Our friendly team is here to help you choose the perfect curriculum. <br className="d-none d-md-block" />
          Give us a call today — we'd love to hear from you!
        </p>
        
        {/* White Button */}
        <a href="tel:1234567890" className="cta-btn d-inline-flex align-items-center gap-2">
          <BsTelephone size={18} />
          <span>(123) 456-7890</span>
        </a>

      </div>

    </section>
  );
};

export default Cta;