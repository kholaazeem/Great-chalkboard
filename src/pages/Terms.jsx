import React from 'react';

const Terms = () => {
  // Terms ka saara data yahan array mein hai
  const termsData = [
    {
      id: 1,
      title: "1. Acceptance of Terms",
      text: "By accessing and using the Great Chalkboard Company website and purchasing our curriculum products, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services."
    },
    {
      id: 2,
      title: "2. Products & Services",
      text: "The Great Chalkboard Company provides Vietnamese language curriculum materials for educational use. All products are intended for personal or institutional educational purposes. Redistribution, copying, or resale of our materials without written consent is strictly prohibited."
    },
    {
      id: 3,
      title: "3. Pricing & Payment",
      text: "All prices listed on our website are in US dollars. We reserve the right to update pricing at any time. Orders are processed upon confirmed payment. We accept major credit cards and approved institutional purchase orders."
    },
    {
      id: 4,
      title: "4. Returns & Refunds",
      text: "We offer a 30-day satisfaction guarantee on all physical curriculum products. If you are not satisfied, you may return the materials in their original condition for a full refund. Digital products are non-refundable once accessed or downloaded."
    },
    {
      id: 5,
      title: "5. Intellectual Property",
      text: "All content, materials, designs, and trademarks on this website are the property of the Great Chalkboard Company. Unauthorized use, reproduction, or distribution of our intellectual property is prohibited and may result in legal action."
    },
    {
      id: 6,
      title: "6. Privacy & Data",
      text: "We respect your privacy. Personal information collected through our website is used solely for order processing and communication. We do not sell or share your data with third parties. For full details, please review our Privacy Policy."
    },
    {
      id: 7,
      title: "7. Limitation of Liability",
      text: "The Great Chalkboard Company shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our total liability is limited to the purchase price of the product in question."
    },
    {
      id: 8,
      title: "8. Changes to Terms",
      text: "We may update these Terms of Service from time to time. Changes will be posted on this page with a revised effective date. Continued use of our services after changes constitutes acceptance of the updated terms."
    },
    {
      id: 9,
      title: "9. Contact Us",
      text: "If you have any questions about these Terms of Service, please contact us at hello@greatchalkboard.com or call (123) 456-7890. We are happy to assist you."
    }
  ];

  return (
    // animate-up se page khulte hi smooth entry aayegi
    <div className="container animate-up" style={{ marginTop: '130px', marginBottom: '80px' }}>
      
      {/* Wrapper jisko hum center karenge taake text screen par phail na jaye */}
      <div className="terms-wrapper mx-auto text-start">
        
        {/* Main Heading */}
        <h1 className="terms-main-title">Terms of Service</h1>
        <p className="terms-subtitle">
          Last updated: March 1, 2026. Please read these terms carefully before using our website or purchasing our products.
        </p>

        {/* Mapped Sections */}
        {termsData.map((section) => (
          <div key={section.id} className="terms-section">
            <h3 className="terms-heading">{section.title}</h3>
            <p className="terms-text">{section.text}</p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Terms;