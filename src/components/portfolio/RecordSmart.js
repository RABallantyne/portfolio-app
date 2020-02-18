import React from 'react';

export default function RecordSmart() {
  return (
    <div className='info-section'>
      <div className='info-header'>
        <span className='info-title'>RecordSmart</span> <span>JavaScript</span>|
        <span>Ruby on Rails</span>|
        <span>
          <a
            href='https://github.com/RABallantyne/record-smart-frontend'
            rel='noopener noreferrer'
            target='_blank'
          >
            Github
          </a>
        </span>
        |
        <span>
          <a
            href='https://github.com/RABallantyne/record-smart-backend'
            rel='noopener noreferrer'
            target='_blank'
          >
            API
          </a>
        </span>
        <p>App for planning and organizing recording sessions.</p>
      </div>
      <div className='info-points'>
        <p>+ Designed and styled site using custom CSS.</p>
        <p>
          + Optimized user experience with full CRUD for parts, songs, and
          recording projects.
        </p>
        <p>+ Utilized JWT tokens for a secure login.</p>
      </div>
    </div>
  );
}
