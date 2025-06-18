import { WORD_LENGTH } from "../../constants";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((index) => (
        <span key={index} className="cell">
          {value && value[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
