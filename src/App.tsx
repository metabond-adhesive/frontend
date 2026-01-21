import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* ...existing routes... */}
          <Route path="/about" element={<AboutUs />} />
          {/* ...existing routes... */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;