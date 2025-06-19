import restart from "../../assets/restart.svg";

function Banner({ status, children, handleRestartGame }) {
  return (
    <div className={`${status} banner`}>
      <header>
        <button onClick={handleRestartGame}>
          <span className="visually-hidden">Restart game</span>
          <img src={restart} alt="" />
        </button>
      </header>
      {children}
    </div>
  );
}

export default Banner;
