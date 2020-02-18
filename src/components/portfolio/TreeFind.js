import React from 'react';

export default function TreeFind() {
  return (
    <div className='info-section'>
      <div className='info-header'>
        <span className='info-title'>TreeFind</span> <span>Ruby</span>|
        <span>
          <a
            href='https://github.com/lukemenard/TreeFind'
            rel='noopener noreferrer'
            target='_blank'
          >
            Github
          </a>
        </span>
        <p>Ruby CLI app for identifying trees based on a leaf sample.</p>
      </div>
      <div className='info-points'>
        <p>+ Created a robust app utilizing only Ruby.</p>
        <p>
          + Used a variety of gems to create a user friendly CLI experience
          including option menus and pictures.
        </p>
        <p>
          + Developed complex logic to narrow down from over 30 tree species
          commonly found in Colorado.
        </p>
      </div>
    </div>
  );
}
