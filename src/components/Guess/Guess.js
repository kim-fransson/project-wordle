import { WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(WORD_LENGTH).map((index) => (
        <Cell
          key={index}
          letter={result ? result[index].letter : undefined}
          status={result ? result[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
