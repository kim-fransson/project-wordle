import Banner from "../Banner";

function WonBanner({ numOfGuesses, handleRestartGame }) {
  return (
    <Banner status="happy" handleRestartGame={handleRestartGame}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
