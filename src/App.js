import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import AnimatedBackground from './components/AnimatedBackground';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    <Router>
      <div >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <AnimatedBackground />
        <Routes>
          <Route  path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
          <Route path="/projects" element={<Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </div>
    </Router>
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} className='sticky-bottom' />
    </>
  );
}

export default App;
