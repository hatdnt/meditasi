import React from 'react'
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  navigate('/login')


  return (
    <><link rel="stylesheet" href="Navbar.css" />
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
          <form2>
            <input type="search" placeholder="Search..." />
            <searchbutton type="submit">Search</searchbutton>
          </form2>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button onClick={navigate} class="button is-primary">
                <strong>Log In</strong>
              </button>
              <a class="button is-light">
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav></>
  )
}

export default Navbar