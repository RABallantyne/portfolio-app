import React, { useState } from 'react';
import Life from './gameOfLife/Life';
import PortfolioLanding from './PortfolioLanding';
import TriviaMain from './trivia/TriviaMain';

export default function Portfolio() {
  const [selection, setSelection] = useState({
    selection: ''
  });

  const clickHandle = e => {
    setSelection(e.target.id);
  };

  const renderSwitch = selection => {
    switch (selection) {
      case 'Life':
        return <Life />;
      case 'Trivia':
        return <TriviaMain />;
      default:
        return <PortfolioLanding />;
    }
  };

  return (
    <>
      <div id='Life' onClick={e => clickHandle(e)}>
        Life
      </div>
      <div id='Trivia' onClick={e => clickHandle(e)}>
        Trivia
      </div>
      {renderSwitch(selection)}
    </>
  );
}
