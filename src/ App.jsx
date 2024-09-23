'import React from react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Travel Site</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinos</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
