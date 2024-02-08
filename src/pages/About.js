import React from 'react';

function About({ darkMode, toggleDarkMode }) {
  return (
    <div className={`container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className="m-4 p-4 row justify-content-center">
      <div className="col-auto">
        <h2>About Page</h2>
        <p>Welcome to my website!</p>
      </div>
    </div>
  </div>
  );
}

export default About;
