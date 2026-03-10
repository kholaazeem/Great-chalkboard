import React from 'react';

const AboutHero = () => {
  return (
    // mt-5 pt-5 se navbar ke neechay jagah banegi
    <section className="container text-center animate-up" style={{ marginTop: '130px', marginBottom: '80px' }}>
      
      {/* Heading */}
      <h1 className="about-title mb-4">
        A Legacy of <span style={{ color: 'var(--color-green)' }}>Trusted Education</span>
      </h1>
      
      {/* Subtitle */}
      <p className="about-subtitle mx-auto mb-5">
        The Great Chalkboard Company has been shaping Vietnamese language education for over two decades, grounded in academic excellence and genuine care for our learners.
      </p>
      
      {/* Image Container */}
      <div className="about-image-wrapper mx-auto">
        <img 
          // Placeholder image (Aap ise apni real image se replace kar sakti hain)
          src="about-hero-.jpg" 
          alt="Senior Teacher at Desk" 
          className="img-fluid rounded-4 shadow-sm object-fit-cover"
        />
      </div>

    </section>
  );
};

export default AboutHero;