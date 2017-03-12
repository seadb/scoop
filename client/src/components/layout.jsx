import React from 'react'
//import Routes from '../components/Routes';
//import Logo from '../components/Logo';
import NavGuest from './nav-guest';
import NavUser from './nav-user';

const Layout = (props) => {
  return (
    <div>
      <header className="header">
        {props.auth.user ? <NavUser id={props.auth.user.id}/> : <NavGuest/>}
      </header>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

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
