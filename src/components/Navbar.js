// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'dark-mode-navbar' : 'navbar-light bg-light '}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">🖳
        </Link>
        <Social darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> {/* Align items to the right */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${darkMode ? 'dark-mode-navbar' : 'navbar-light bg-light text-primary'}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${darkMode ? 'dark-mode-navbar' : 'navbar-light bg-light text-primary'}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${darkMode ? 'dark-mode-navbar' : 'navbar-light bg-light text-primary '}`} to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
          <div className="form-check form-switch m-4"> {/* Add margin to the switch */}
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeToggle"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label className="form-check-label" htmlFor="darkModeToggle">🌙</label>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
