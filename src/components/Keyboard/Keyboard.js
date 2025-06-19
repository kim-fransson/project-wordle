import { KEYBOARD_KEYS } from "./Keyboard.constants";
import { getStatusByLetter } from "./Keyboard.helper";

function Cell({ status, children }) {
  const className = status ? `${status} keyboard-cell` : "keyboard-cell";

  return <span className={className}>{children}</span>;
}

function Keyboard({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard-wrapper">
      {KEYBOARD_KEYS.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((keyboardKey) => (
            <Cell key={keyboardKey} status={statusByLetter.get(keyboardKey)}>
              {keyboardKey}
            </Cell>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
