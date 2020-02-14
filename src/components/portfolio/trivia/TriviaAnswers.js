import React from 'react';

export default function TriviaQuestions(props) {
  const displayAnswers = props.answers.map(answer => (
    <div className='answers' onClick={() => props.checkAnswer(answer)}>
      {answer.replace(/&quot;|&#039;/gi, "'")}{' '}
    </div>
  ));
  return <div className='answers-container'>{displayAnswers}</div>;
}
