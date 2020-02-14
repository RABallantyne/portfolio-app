import React, { useState } from 'react';
import Life from './gameOfLife/Life';
import TriviaMain from './trivia/TriviaMain';
import Barback from './BarBack';

export default function Portfolio() {
  const [selection, setSelection] = useState();
  const [showMenu, setShowMenu] = useState(true);

  const backAction = () => {
    setSelection();
    setShowMenu(true);
  };

  const clickHandle = e => {
    const { title } = e.target;
    setSelection(title);
    setShowMenu(false);
  };

  const renderSwitch = selection => {
    switch (selection) {
      case 'Life':
        return <Life />;
      case 'Trivia':
        return <TriviaMain />;
      case 'Barback':
        return <Barback />;
      default:
        return <div></div>;
    }
  };

  return (
    <>
      <div className='projects-container'>
        {showMenu ? (
          <>
            <h1 className='large'>
              Welcome to my Portfolio, please select a project to learn more.
            </h1>
            <div className='project-card'>
              <h2>Game of Life</h2>
              <p>An interesting cellular propagation simulator. </p>
              <div className='btn' title='Life' onClick={e => clickHandle(e)}>
                View Project
              </div>
            </div>
            <div className='project-card'>
              <h2>BarBack</h2>
              <p>An inventory tracking and drink costing app for bars.</p>
              <div
                className='btn'
                title='Barback'
                onClick={e => clickHandle(e)}
              >
                View Project
              </div>
            </div>
            <div className='project-card'>
              <h2>Trivia</h2>
              <p>A simple trivia game, focusing on tech questions.</p>
              <div className='btn' title='Trivia' onClick={e => clickHandle(e)}>
                View Project
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='btn btn-special' onClick={() => backAction()}>
              Return to Projects Selection
            </div>
            {renderSwitch(selection)}
            <div className='btn btn-special' onClick={() => backAction()}>
              Return to Projects Selection
            </div>
          </>
        )}
      </div>
    </>
  );
}
