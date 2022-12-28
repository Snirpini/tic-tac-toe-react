import React, { useState, useEffect } from "react";
import Board from "../Board/Board";
import Header from "../Header/Header";
import RestartButton from "../RestartButton/RestartButton";
import "./App.css";

const App = () => {
  const O_TEXT = "O";
  const X_TEXT = "X";
  const [currentPlayer, setCurrentPlayer] = useState(X_TEXT);
  const [restartValue, setRestartValue] = useState(0);
  const [isGameOn, setIsGameOn] = useState(true);
  const [winningMessage, setWinningMessage] = useState("");

  function restart() {
    setRestartValue((current) => current + 1);
    setCurrentPlayer(X_TEXT);
    setIsGameOn(true);
  }

  function swapPlayers() {
    setCurrentPlayer(currentPlayer == X_TEXT ? O_TEXT : X_TEXT);
  }

  function gameOver(isDraw) {
    setIsGameOn(false);
    setWinningMessage(isDraw ? "It's a draw!" : `${currentPlayer} has won!`);
  }

  return (
    <div className="container">
      <Header isGameOn={isGameOn} currentPlayer={currentPlayer}/>
      <Board
        restartValue={restartValue}
        currentPlayer={currentPlayer}
        swapPlayers={swapPlayers}
        gameOver={gameOver}
      />
      {!isGameOn && <div className="winningMessage">{winningMessage}</div>}
      <RestartButton onClick={restart}/>
    </div>
  );
};

export default App;
