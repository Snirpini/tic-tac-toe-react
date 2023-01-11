import React, { useState, useContext } from "react";
import Board from "../Board/Board";
import Header from "../Header/Header";
import RestartButton from "../RestartButton/RestartButton";
import HistoryTable from "../HistoryTable/HistoryTable";
import { HistoryContext } from "../HistoryContext";
import "./Game.css";

const Game = () => {
  const O_TEXT = "O";
  const X_TEXT = "X";
  const [currentPlayer, setCurrentPlayer] = useState(X_TEXT);
  const [restartValue, setRestartValue] = useState(0);
  const [isGameOn, setIsGameOn] = useState(true);
  const [winningMessage, setWinningMessage] = useState("");
  const {addGameToHistory} = useContext(HistoryContext);

  function restart() {
    setRestartValue((current) => current + 1);
    setCurrentPlayer(X_TEXT);
    setIsGameOn(true);
  }

  function swapPlayers() {
    setCurrentPlayer(currentPlayer === X_TEXT ? O_TEXT : X_TEXT);
  }

  function gameOver(isDraw) {
    setIsGameOn(false);
    setWinningMessage(isDraw ? "It's a draw!" : `${currentPlayer} has won!`);
    saveGameResultToHistory(isDraw);
  }

  function saveGameResultToHistory(isDraw) {
    let gameResult = {winningPlayer: isDraw ? "draw" : currentPlayer, gameDate: getTodayDate()};
    addGameToHistory(gameResult);
  }

  function getTodayDate() {
    const date = new Date();
    return date.toLocaleDateString("en-GB", {day: "2-digit", month: "2-digit", year: "numeric" });
  }

  return (
    <div className="container">
      <div className="leftSide">
      <Header isGameOn={isGameOn} currentPlayer={currentPlayer} />
      <Board
        restartValue={restartValue}
        currentPlayer={currentPlayer}
        swapPlayers={swapPlayers}
        gameOver={gameOver}
      />
      {!isGameOn && <div className="winningMessage">{winningMessage}</div>}
      <RestartButton onClick={restart} />
      </div>
      <div className="rightSide">
        <HistoryTable />
      </div>
    </div>
  );
};

export default Game;

// function gameOver(isDraw) {
//   setIsGameOn(false);
//   setWinningMessage(isDraw ? "It's a draw!" : `${currentPlayer} has won!`);
//   saveGameResultToHistory(isDraw);
// }

// function saveGameResultToHistory(isDraw) {
//   const today = new Date(Date.now());
//   let gameResult = {winningPlayer: isDraw ? "draw" : currentPlayer, gameDate: today.toDateString()};

//   let storedHistory = JSON.parse(localStorage.getItem("historyFile"));
//   storedHistory = storedHistory ? storedHistory : [];

//   let updatedHistory = [...storedHistory, JSON.stringify(gameResult)];
//   localStorage.setItem("historyFile", JSON.stringify(updatedHistory));
// }

// <History.Provider value={localStorage}>
//   <HistoryTable />
// </History.Provider>