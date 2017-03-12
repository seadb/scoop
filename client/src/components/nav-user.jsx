import React, { Component } from 'react';

const NavUser = (props) => (
  <nav className="nav">
    <div className="nav__left">
      <a href="/#/" className="nav__link icon">
        <i className="fa fa-home" aria-hidden="true"></i>
      </a>
    </div>
    <div className="nav__right">
      <a href={"#/" + props.id} className="nav__link icon">
        <i className="fa fa-user-circle" aria-hidden="true"></i>
      </a>
      <a href="#" className="nav__link">
        <i className="fa fa-sign-out" aria-hidden="true"></i>
      </a>
    </div>
  </nav>
);

export default NavUser
