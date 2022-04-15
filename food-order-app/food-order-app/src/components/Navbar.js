import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleIcon = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={showLinks ? 'open' : 'close'}>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/">Menu</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/">Menu</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <button onClick={toggleIcon}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
