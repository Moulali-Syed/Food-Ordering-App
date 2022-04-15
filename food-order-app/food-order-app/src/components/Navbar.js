import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo} alt="logo" />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/">Menu</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
