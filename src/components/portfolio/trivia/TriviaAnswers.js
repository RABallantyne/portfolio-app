import React from "react";

export default function TriviaQuestions(props) {
  const displayAnswers = props.answers.map(answer => (
    <h3 onClick={() => props.checkAnswer(answer)}>
      {answer.replace(/&quot;|&#039;/gi, "'")}{" "}
    </h3>
  ));
  return <div>{displayAnswers}</div>;
}
