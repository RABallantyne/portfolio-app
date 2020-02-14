import React, { Component } from 'react';
import TriviaAnswers from './TriviaAnswers';

export default class TriviaMain extends Component {
  state = {
    question: '',
    correctAnswer: '',
    incorrectAnswers: [],
    answers: [],
    difficulty: '',
    answered: false,
    showAnswer: false,
    points: 0
  };

  showAnswers = () => {
    let currentAnswers = this.state.incorrectAnswers;
    currentAnswers.push(this.state.correctAnswer);
    for (let i = currentAnswers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = currentAnswers[i];
      currentAnswers[i] = currentAnswers[j];
      currentAnswers[j] = temp;
    }
    this.setState({
      answers: currentAnswers
    });
  };

  getQuestion = () => {
    fetch('https://opentdb.com/api.php?amount=1&category=18&type=multiple')
      .then(response => response.json())
      .then(result =>
        this.setState({
          question: result.results[0].question,
          correctAnswer: result.results[0].correct_answer,
          incorrectAnswers: result.results[0].incorrect_answers,
          difficulty: result.results[0].difficulty,
          showAnswer: false,
          answered: false
        })
      )
      .then(() => this.showAnswers());
  };

  componentDidMount() {
    this.getQuestion();
  }

  checkAnswer = answer => {
    if (answer === this.state.correctAnswer) {
      this.setState({
        points: this.state.points + 5,
        answered: true
      });
    } else {
      this.setState({
        showAnswer: true,
        answered: false,
        points: this.state.points - 2
      });
    }
    setTimeout(() => {
      this.getQuestion();
    }, 2000);
  };

  render() {
    return (
      <div>
        <h1 className='large'>Trivia</h1>
        <p>
          This game calls out to a trivia api and randomly recieves trivia
          questions.
        </p>
        <a
          href='https://github.com/RABallantyne/portfolio-app/blob/master/src/components/portfolio/gameOfLife/Life.js'
          rel='noopener noreferrer'
          target='_blank'
        >
          Github
        </a>
        <div className='trivia-container'>
          {this.state.showAnswer ? (
            <div className='alert alert-danger'>
              wrong! the correct answer is {this.state.correctAnswer}, you lose
              2 points.
            </div>
          ) : null}
          {!this.state.showAnswer && this.state.answered ? (
            <div className='alert alert-success'>
              Correct! You get 5 points!
            </div>
          ) : null}
          <h2>{this.state.question.replace(/&quot;|&#039;/gi, "'")}</h2>
          <div className='answer-score-container'>
            <TriviaAnswers
              answers={this.state.answers}
              checkAnswer={this.checkAnswer}
            />
            <div className='score'>score: {this.state.points}</div>
          </div>
          <div className='btn' onClick={() => this.getQuestion()}>
            Another?
          </div>
        </div>
      </div>
    );
  }
}
