import React from 'react';
import { Link } from 'react-router-dom';

const unClick = () => {
  document.querySelector('input').checked = false;
};

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <div className='nameLinks'>
        <h1>
          <Link to='/'>Rob Ballantyne</Link>
        </h1>

        <h1>
          <a
            href='mailto:RABallantyne@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            <i className='fas fa-envelope-square'></i>
          </a>
          <a
            href='https://github.com/RABallantyne/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <i className='fab fa-github-square'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/rob-ballantyne-73b66b45/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </h1>
      </div>
      <div className='dropdown'>
        <input type='checkbox' />
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>

        {/* <div className='dropdown-content'> */}
        <ul id='menu' className='bg-dark' onClick={unClick}>
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
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
