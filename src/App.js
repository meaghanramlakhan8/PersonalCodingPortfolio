import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About'; // Ensure the file name matches exactly
import Work from './Work';
import Projects from './Projects';
import Footer from './footer'; // Ensure the file name matches exactly
import Contact from './Contact';
import Navbar from './Navbar';
import CommandPalette from './CommandPalette';
import BootScreen from './BootScreen';
import NotFound from './NotFound';
import SystemEffects from './SystemEffects';
import EasterEggs from './EasterEggs';
import TechCursor from './TechCursor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SystemEffects />
        <EasterEggs />
        <TechCursor />
        <BootScreen />
        <Navbar />
        <CommandPalette />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
