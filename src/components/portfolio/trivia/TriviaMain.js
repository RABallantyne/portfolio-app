import React, { Component } from "react";
import TriviaAnswers from "./TriviaAnswers";
import "./Trivia.css";

export default class TriviaMain extends Component {
  state = {
    question: "",
    correctAnswer: "",
    incorrectAnswers: [],
    answers: [],
    difficulty: "",
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
    fetch("https://opentdb.com/api.php?amount=1&category=18&type=multiple")
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
    }, 1000);
  };

  render() {
    return (
      <div className="trivia-container">
        {this.state.showAnswer ? (
          <h3>
            wrong! the correct answer is {this.state.correctAnswer}, you lose 2
            points.
          </h3>
        ) : null}
        {!this.state.showAnswer && this.state.answered ? (
          <h3>Correct! You get 5 points!</h3>
        ) : null}
        <h2>{this.state.question.replace(/&quot;|&#039;/gi, "'")}</h2>
        <TriviaAnswers
          answers={this.state.answers}
          checkAnswer={this.checkAnswer}
        />
        <h3>score: {this.state.points}</h3>
        <button onClick={() => this.getQuestion()}>Another?</button>
      </div>
    );
  }
}
