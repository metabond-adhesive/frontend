import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './pages/About';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './App.css';
import ScrollToTop from './components/ScrollToTop'; // added

function App() {
  return (
    <div className="App">
      <ScrollToTop /> {/* ensure every navigation (and initial /) scrolls to top */}
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-old" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
