import React from 'react';
import Logo from '../assets/Images&Icons/Logo.svg'
import UserIcon from '../assets/Images&Icons/User.svg'

const Header = () => (
  <header className="con-navbar">
    <div className="container">
      <a className="logo" href="index.html"><img src={Logo} alt="Silicon Logo" /></a>

      <nav id="main-menu" className="navbar">
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link-con" href="contact.html">Contact</a>
      </nav>

      <div className="right-nav">
        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-sign-in" className="btn-primary" href="#">
          <span>
            <img
              className="usericon" src={UserIcon} alt="User"/>
            Sign in / up
          </span>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
