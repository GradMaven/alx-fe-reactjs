import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333' }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>About</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
