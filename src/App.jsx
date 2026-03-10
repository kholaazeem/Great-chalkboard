import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar har page par upar rahega */}
        <Navbar />

        {/* Yeh hissa links pe click karne se change hoga */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        {/* Footer har page par neechay rahega */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;