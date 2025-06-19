export const WORD_LENGTH = 5;
export const NUM_OF_GUESSES_ALLOWED = 6;

export const GameStatus = Object.freeze({
  RUNNING: Symbol("running"),
  WON: Symbol("won"),
  LOST: Symbol("lost"),
});
