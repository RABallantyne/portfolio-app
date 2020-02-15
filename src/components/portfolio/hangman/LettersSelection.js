import React from "react";
import "./Hangman.css";

export default function LettersSelection(props) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let displayLetters = alphabet.map((letter, i) => (
    <div
      className="letters"
      key={i}
      disabled={props.guesses.includes(letter) ? true : false}
      onClick={() => props.selectLetter(letter)}
    >
      {" "}
      {letter.toUpperCase()}{" "}
    </div>
  ));
  return (
    <div>
      <h1 className="lettersDisplay">{displayLetters}</h1>
    </div>
  );
}
