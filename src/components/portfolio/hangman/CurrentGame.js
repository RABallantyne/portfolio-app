import React from "react";
import "./Hangman.css";

export default function CurrentGame(props) {
  const sentence = props.puzzleWord.split(/[ ,]+/);
  const words = sentence.map(word => word.split(""));
  const letters = words.map((word, i) => (
    <ul className="displayWordContainer" key={i}>
      {word.map((letter, i) => (
        <li className="displayWord" key={i}>
          <span className={props.guesses.includes(letter) ? "visible" : ""}>
            {letter}
          </span>
        </li>
      ))}
    </ul>
  ));
  // console.log(letters);
  return <div className="display">{letters}</div>;
}
