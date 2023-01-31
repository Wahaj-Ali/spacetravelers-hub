import React from 'react';
import logo from '../images/planet.png';
import Navbar from './Navbar';

const Header = () => (
  <header className="App-header">
    <img src={logo} alt="Planet logo" className="App-logo" />
    <h1 className="title">
      Space Travelers`&apos Hub
    </h1>
    <Navbar />
  </header>
);

export default Header;
