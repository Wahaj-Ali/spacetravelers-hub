import React from 'react';
import logo from '../images/planet.png'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="Planet logo" className="App-logo" />
      <h1 className="title">
        Space Travelers' Hub
      </h1>
      <Navbar />
    </header>
  )
}

export default Header;
