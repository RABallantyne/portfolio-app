import React from 'react';

export default function BarBack() {
  return (
    <div className='info-section'>
      <div className='info-header'>
        <span className='info-title'>BarBack</span>{' '}
        <span>React | NodeJS |</span>
        <span>
          <a
            href='https://github.com/RABallantyne/barback-frontend'
            rel='noopener noreferrer'
            target='_blank'
          >
            Github
          </a>
        </span>
        |
        <span>
          <a
            href='https://github.com/RABallantyne/bar-back-api'
            rel='noopener noreferrer'
            target='_blank'
          >
            API
          </a>
        </span>
        |
        <span>
          <a
            href='https://barback-app-1489b.firebaseapp.com/'
            rel='noopener noreferrer'
            target='_blank'
          >
            Link
          </a>
        </span>
        <p>
          App for controlling bar inventory, creating menus and building/costing
          cocktails.
        </p>
      </div>
      <div className='info-points'>
        <p>
          + Utilized Auth 0 for a highly secure login with the option of using
          Google.{' '}
        </p>
        <p>
          + Designed and styled an intuitive user experience with clear and
          obvious navigation using Bootstrap 4 and custom CSS.
        </p>
        <p>
          + Utilized years of bar management experience to allow users to
          customize and clearly understand costs.
        </p>
        <p>
          + Learned and utilized Node in a matter of days to create a
          lightweight API.
        </p>
        <p>
          + Implemented asynchronous CRUD actions for bars, menus, drinks, and
          ingredients.
        </p>
      </div>
    </div>
  );
}
