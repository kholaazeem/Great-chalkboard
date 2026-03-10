import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Team from '../components/Team';
import Cta from '../components/Cta';

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Team />
      <Cta />
    </div>
  );
};

export default Home;