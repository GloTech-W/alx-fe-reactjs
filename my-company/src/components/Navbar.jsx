import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#eee', padding: '10px', display: 'flex', justifyContent: 'center' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ margin: '0 15px' }}><Link to="/">Home</Link></li>
        <li style={{ margin: '0 15px' }}><Link to="/about">About</Link></li>
        <li style={{ margin: '0 15px' }}><Link to="/services">Services</Link></li>
        <li style={{ margin: '0 15px' }}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
