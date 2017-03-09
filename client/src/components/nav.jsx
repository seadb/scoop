import React, { Component } from 'react';

const Nav = () => (
  <nav className="nav">
    <a href="/#/" className="nav__link">
      <i className="fa fa-home" aria-hidden="true"></i>
    </a>
    <a href="/#/login" className="nav__link">Log In</a>
    <a href="/#/register">
      <button className="button green-bg white">
        Register
      </button>
    </a>
  </nav>
);

export default Nav
