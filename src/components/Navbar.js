import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>Rob Ballantyne</Link>
      </h1>
      <ul>
        <li>
          <Link to='/about'>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to='/portfolio'>
            <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
