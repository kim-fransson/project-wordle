import { WORD_LENGTH } from "../../constants";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ validatedGuess }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((index) => (
        <Cell
          key={index}
          letter={validatedGuess ? validatedGuess[index].letter : undefined}
          status={validatedGuess ? validatedGuess[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
