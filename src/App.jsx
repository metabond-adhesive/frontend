import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import ProductRange from './pages/ProductRange.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Brochures from './pages/Brochures.jsx';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductRange />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/brochures" element={<Brochures />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
