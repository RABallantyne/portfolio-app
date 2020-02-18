import React, { useState } from 'react';
import Life from './gameOfLife/Life';
import TriviaMain from './trivia/TriviaMain';
import Barback from './BarBack';
import HangmanMain from './hangman/HangmanMain';
import RecordSmart from './RecordSmart';
import ScoreKeeper from './ScoreKeeper';
import TreeFind from './TreeFind';

export default function Portfolio(props) {
  const [selection, setSelection] = useState();
  const [showMenu, setShowMenu] = useState(true);
  const { isClicked } = props.location;
  console.log(isClicked);

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
      case 'Hangman':
        return <HangmanMain />;
      case 'RecordSmart':
        return <RecordSmart />;
      case 'ScoreKeeper':
        return <ScoreKeeper />;
      case 'TreeFind':
        return <TreeFind />;
      default:
        return <div></div>;
    }
  };

  return (
    <>
      <div className='projects-container'>
        {showMenu ? (
          <>
            <h1 className='large text-primary'>
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
            <div className='project-card'>
              <h2>Hangman</h2>
              <p>Classic Hangman! </p>
              <div
                className='btn'
                title='Hangman'
                onClick={e => clickHandle(e)}
              >
                View Project
              </div>
            </div>
            <div className='project-card'>
              <h2>RecordSmart</h2>
              <p>
                A todo app built to help recording artists to stay organized and
                on task.{' '}
              </p>
              <div
                className='btn'
                title='RecordSmart'
                onClick={e => clickHandle(e)}
              >
                View Project
              </div>
            </div>
            <div className='project-card'>
              <h2>ScoreKeeper</h2>
              <p>App designed to help players keep score during any game. </p>
              <div
                className='btn'
                title='ScoreKeeper'
                onClick={e => clickHandle(e)}
              >
                View Project
              </div>
            </div>
            <div className='project-card'>
              <h2>TreeFind</h2>
              <p>
                CLI app that can be used as a field guide to help identify the
                trees of Colorado.
              </p>
              <div
                className='btn'
                title='TreeFind'
                onClick={e => clickHandle(e)}
              >
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
