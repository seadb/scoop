import React from 'react'
//import Routes from '../components/Routes';
//import Logo from '../components/Logo';
import Nav from './nav';

const Layout = (props) => (
  <div>
    <header className="header" >
      <Nav/>
    </header>
    <div className="content">
      {props.children}
    </div>
  </div>
)

/*
    <div className={styles.header} >
      <Logo/>
      <Nav/>
    </div>
    <div className={styles.body} >
      <Routes />
    </div>
*/
export default Layout
