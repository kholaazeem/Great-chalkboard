import React from 'react';

const OurStory = () => {
  return (
    // mt-5 pt-5 se navbar ke neechay jagah banegi
    <section className="container" style={{ marginTop: '120px', marginBottom: '80px' }}>
      {/* align-items-center ki wajah se text lambi image ke bilkul center mein rahega */}
      <div className="row align-items-center">
        
        {/* Left Column (Text): Ise humne 5 columns diye hain (col-lg-5) */}
        {/* pe-lg-5 se text aur image ke darmiyan acha khasa fasla aayega */}
        <div className="col-lg-5 col-md-12 mb-5 mb-lg-0 pe-lg-5">
          <h2 className="story-title mb-4">Our Story</h2>
          
          <p className="story-text">
            Founded in 2001, the Great Chalkboard Company began as a small group of passionate educators who saw a need for high-quality Vietnamese language resources in American high schools.
          </p>
          
          <p className="story-text">
            What started in a single classroom has grown into a nationally recognized curriculum provider, trusted by school districts across the country for our thoughtful, research-backed approach.
          </p>
        </div>

        {/* Right Column (Image): Ise humne 7 columns diye hain (col-lg-7) taake yeh bada dikhe */}
        <div className="col-lg-7 col-md-12">
          <img 
            src="hero-img.jpg" 
            alt="Classroom chalkboard and desk" 
            className="img-fluid story-image"
          />
        </div>

      </div>
    </section>
  );
};

export default OurStory;