import React from 'react';

function Projects({ darkMode, toggleDarkMode }) {
  return (
    <div className={`container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className="m-4 p-4 row justify-content-center">
      <div className="col-md-6">
        <h2>Home Page</h2>
        <p>Welcome to my website!</p>
        <p>mode is{darkMode}</p>
      </div>
    </div>
  </div>
  );
}

export default Projects;
