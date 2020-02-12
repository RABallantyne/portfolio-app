import React from 'react';
import { Link } from 'react-router-dom';
import RABallantyneResume from '../resume/RABallantyneResume.pdf';

const Landing = () => {
  return (
    <>
      <div>
        Full stack web developer with a passion for solving real world problems.
        Experience in Ruby on Rails, JavaScript, React and NodeJS and a
        background in Restaurant Management. I bring strong skills in
        team-building, project management, vendor relations and organization to
        help create efficiency, cost control, and client satisfaction.
      </div>

      <div className='buttons'>
        <Link to='/about'>
          <span>About me</span>
        </Link>
        <Link to='/portfolio'>
          <span>Portfolio</span>
        </Link>
        <Link to='/contact'>
          <span>Contact</span>
        </Link>
        <a href={RABallantyneResume}>Download Resume</a>
      </div>
    </>
  );
};

export default Landing;
