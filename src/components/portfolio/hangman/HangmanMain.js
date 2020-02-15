import React, { Component } from "react";
import LettersSelection from "./LettersSelection";
import CurrentGame from "./CurrentGame";
import puzzleWords from "./data.js";

export default class HangmanMain extends Component {
  state = {
    puzzleWord: "",
    guesses: [],
    wrongGuesses: [],
    winner: false
  };

  newGame = () => {
    let word = puzzleWords[Math.floor(Math.random() * 20)];
    this.setState({
      puzzleWord: word,
      guesses: [],
      wrongGuesses: [],
      winGuesses: [],
      winner: false
    });
  };

  componentDidMount() {
    this.newGame();
  }

  selectLetter = letter => {
    if (this.state.puzzleWord.includes(letter)) {
      this.setState(
        {
          guesses: [...this.state.guesses, letter],
          winGuesses: [...this.state.winGuesses, letter]
        },
        () => this.isWinner()
      );
    }
    if (!this.state.puzzleWord.includes(letter)) {
      this.setState({
        wrongGuesses: [...this.state.wrongGuesses, letter],
        guesses: [...this.state.guesses, letter]
      });
    }
  };

  isWinner = () => {
    const winLetters = this.state.puzzleWord
      .replace(/\s/g, "")
      .split("")
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
    // console.log(winLetters);
    return winLetters.sort().toString() ===
      this.state.winGuesses.sort().toString()
      ? this.setState({
          winner: true
        })
      : null;
    // const distinctLetters = [...new Set(winLetters)];
    // if (distinctLetters.sort() === this.state.winGuesses.sort()) {
    //   this.setState({
    //     winner: true
    //   });
    // }
  };

  render() {
    return (
      <div className="hang-container">
        <h1>NERD HANGMAN!</h1>
        {this.state.winner ? <h1>You WIN!</h1> : null}
        {this.state.wrongGuesses.length === 6 ? (
          <>
            <h1>YOU LOSE!</h1>
            <h3>{this.state.puzzleWord.toUpperCase()}</h3>
          </>
        ) : (
          <>
            <CurrentGame
              puzzleWord={this.state.puzzleWord}
              guesses={this.state.guesses}
              wrongGuesses={this.state.wrongGuesses}
            />

            <LettersSelection
              selectLetter={this.selectLetter}
              alphabet={this.state.lettersRemaining}
              guesses={this.state.guesses}
            />
          </>
        )}

        <h3>
          on the count of 6 the thing melts... {this.state.wrongGuesses.length}
        </h3>
        <button onClick={() => this.newGame()}>New Game?</button>
      </div>
    );
  }
}
