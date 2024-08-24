import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About'; // Ensure the case matches the file name exactly
import Work from './Work';
import Projects from './Projects';
import Footer from './footer'; // Ensure the import is correct
import Contact from './Contact';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About.js" element={<About />} />
          <Route path="/Work.js" element={<Work />} />
          <Route path="/Projects.js" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />  {/* Footer added here to ensure it's displayed on all pages */}
      </div>
    </Router>
  );
}

export default App;
