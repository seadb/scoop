import React, { Component } from 'react';

const Nav = () => (
  <nav className="nav">
    <a href="/#/" className="nav__link">
      <i className="fa fa-home" aria-hidden="true"></i>
    </a>
    <a href="/#/login" className="nav__link">Login</a>
    <button href="/#/register" className="button green-bg white">Register</button>
  </nav>
);

export default Nav
