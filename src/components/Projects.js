import React from 'react'

function Projects({ darkMode, toggleDarkMode }) {
    return (
        <>
    <div className="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active text-center" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
      <a class="list-group-item list-group-item-action  text-center list-group-item-dark" id="list-tasties-list" data-toggle="list" href="#list-tasties" role="tab" aria-controls="home">🐔 Tasties 🍗</a>
      <a class="list-group-item list-group-item-action  text-center list-group-item-dark" id="list-bbq-list" data-toggle="list" href="#list-bbq" role="tab" aria-controls="settings">BBQ 🍖</a>
      <a class="list-group-item list-group-item-action  text-center list-group-item-dark" id="list-rumdone-list" data-toggle="list" href="#list-rumdone" role="tab" aria-controls="profile">📽️ Rumdone Movies 🎞️</a>
      <a class="list-group-item list-group-item-action  text-center list-group-item-dark" id="list-chatapp-list" data-toggle="list" href="#list-chatap" role="tab" aria-controls="messages">💬 Chat App 💭</a>
    </div>
  </>
    )
}

export default Projects