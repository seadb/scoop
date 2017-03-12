import React, { Component } from 'react';

const NavGuest = () => (
  <nav className="nav">
    <div className="nav__left">
      <a href="/#/" className="nav__link">
        <i className="fa fa-home" aria-hidden="true"></i>
      </a>
    </div>
    <div className="nav__right">
      <a href="/#/login" className="nav__link">Log In</a>
      <a href="/#/register" className="nav__link">
        <button className="button green-bg white">
          Register
        </button>
      </a>
    </div>
  </nav>
);

export default NavGuest
