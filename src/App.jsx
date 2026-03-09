import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero'

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default App