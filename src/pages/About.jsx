import React from 'react';
import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import OurImpact from '../components/OurImpact';
import StandFor from '../components/StandFor';

const About = () => {
  return (
    // Yeh hamara main dabba hai jiske andar 4 components bulaye gaye hain
    <div className="about-page-wrapper">
      
    
      <AboutHero />
      <OurStory/>
      <OurImpact/>
      <StandFor/>

    </div>
  );
};

export default About;