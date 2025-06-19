import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import { GameStatus, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [validatedGuesses, setValidatedGuess] = React.useState([]);
  const [status, setStatus] = React.useState(GameStatus.RUNNING);

  function handleSubmitGuess(tentativeGuess) {
    const validatedGuess = checkGuess(tentativeGuess, answer);
    const nextValidatedGuess = {
      id: crypto.randomUUID(),
      value: validatedGuess,
    };
    const nextValidatedGuesses = [...validatedGuesses, nextValidatedGuess];

    if (tentativeGuess === answer) {
      setStatus(GameStatus.WON);
    } else if (nextValidatedGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus(GameStatus.LOST);
    }

    setValidatedGuess(nextValidatedGuesses);
  }

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} answer={answer} />
      <GuessForm
        handleSubmitGuess={handleSubmitGuess}
        disabled={status !== GameStatus.RUNNING}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {status === GameStatus.WON && (
        <WonBanner numOfGuesses={validatedGuesses.length} />
      )}
      {status === GameStatus.LOST && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
