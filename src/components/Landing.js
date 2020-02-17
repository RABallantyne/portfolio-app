import React from 'react';
import { Link } from 'react-router-dom';
import RABallantyneResume from '../files/RABallantyneResume.pdf';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Rob Ballantyne</h1>
          <p className='lead'>
            Full stack web developer with a passion for solving real world
            problems. Experience in Ruby, JavaScript, Rails, React and NodeJS
            with a background in Restaurant Management. I bring strong skills in
            team-building, project management, client relations and organization
            to help create efficiency, cost control, and client satisfaction.
          </p>
          <div className='buttons'>
            <Link to='/about' className='btn btn-light'>
              <span>About me</span>
            </Link>
            <Link to='/portfolio' className='btn btn-light'>
              <span>Portfolio</span>
            </Link>
            <Link to='/contact' className='btn btn-light'>
              <span>Contact</span>
            </Link>
            <a href={RABallantyneResume} className='btn btn-light'>
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
