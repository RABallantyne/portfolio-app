import React from 'react';

export default function ScoreKeeper() {
  return (
    <div className='info-section'>
      <div className='info-header'>
        <span className='info-title'>ScoreKeeper</span> <span>React</span>|
        <span>
          <a
            href='https://github.com/RABallantyne/score-keeper'
            rel='noopener noreferrer'
            target='_blank'
          >
            Github
          </a>
        </span>
        |
        <span>
          <a
            href='https://scorekeeper-6cffd.firebaseapp.com/'
            rel='noopener noreferrer'
            target='_blank'
          >
            Link
          </a>
        </span>
        <p>Versatile App used for keeping score in any game. </p>
      </div>
      <div className='info-points'>
        <p>
          + Implemented a minimalistic UI Design for an easy user experience
          using custom CSS.
        </p>
        <p>
          + Programmed dynamically to allow for unlimited teams and rounds,
          which can be added at any time.
        </p>
        <p>
          + Deployed as a client side SPA that utilizes local storage and can be
          used offline.
        </p>
      </div>
    </div>
  );
}
