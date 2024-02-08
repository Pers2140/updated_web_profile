// Footer.js
import React from 'react';
import Social from './Social';
// import { Link } from 'react-router-dom';

function Footer({ darkMode, toggleDarkMode }) {
  return (
    <>
    <nav class="nav fixed-bottom mb-4">
    <Social darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </nav>
    </>
  );
}

export default Footer;
