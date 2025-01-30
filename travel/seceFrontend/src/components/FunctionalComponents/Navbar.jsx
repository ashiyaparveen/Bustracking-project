import React from 'react';
import { Link } from 'react-router-dom';
import'./css/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ol>
          <li><Link to='/' className="link">Home</Link></li>
          <li><Link to='/about' className="link">About</Link></li>
          <li><Link to='/gallery' className="link">Gallery</Link></li>
          <li><Link to='/contact' className="link">Contact</Link></li>
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
