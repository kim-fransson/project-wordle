import { STATUS_PRIORITY } from "./Keyboard.constants";

export function getStatusByLetter(validatedGuesses) {
  const letterToStatus = new Map();

  for (const { value: validatedGuess } of validatedGuesses) {
    for (const { letter, status } of validatedGuess) {
      const currentStatus = letterToStatus.get(letter);

      // Only upgrade a letter's status if the new one has higher priority
      if (
        !currentStatus ||
        STATUS_PRIORITY[status] > STATUS_PRIORITY[currentStatus]
      ) {
        letterToStatus.set(letter, status);
      }
    }
  }

  return letterToStatus;
}
