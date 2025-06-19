import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import { GameStatus, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState(GameStatus.RUNNING);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = { id: crypto.randomUUID(), value: tentativeGuess };
    const nextGuesses = [...guesses, nextGuess];

    if (tentativeGuess === answer) {
      setStatus(GameStatus.WON);
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus(GameStatus.LOST);
    }

    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessForm
        handleSubmitGuess={handleSubmitGuess}
        disabled={status !== GameStatus.RUNNING}
      />
      {status === GameStatus.WON && <WonBanner numOfGuesses={guesses.length} />}
      {status === GameStatus.LOST && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
