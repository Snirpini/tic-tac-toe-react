import React, { useState, useEffect, useContext } from "react";
import Board from "../Board/Board";
import Header from "../Header/Header";
import RestartButton from "../RestartButton/RestartButton";
import HistoryTable from "../HistoryTable/HistoryTable";
import "./App.css";

export const History = React.createContext();

const App = () => {
  const O_TEXT = "O";
  const X_TEXT = "X";
  const [currentPlayer, setCurrentPlayer] = useState(X_TEXT);
  const [restartValue, setRestartValue] = useState(0);
  const [isGameOn, setIsGameOn] = useState(true);
  const [winningMessage, setWinningMessage] = useState("");
  
  const [index, setIndex] = useState(0);

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
    saveGameResultToHistory(isDraw);
  }

  function saveGameResultToHistory(isDraw) {
    const today = new Date(Date.now());
    let gameResult = {winningPlayer: isDraw ? "draw" : currentPlayer, gameDate: today.toDateString()};

    let storedHistory = JSON.parse(localStorage.getItem("historyFile"));
    storedHistory = storedHistory ? storedHistory : [];

    let updatedHistory = [...storedHistory, JSON.stringify(gameResult)];
    localStorage.setItem("historyFile", JSON.stringify(updatedHistory));
  }

  return (
    <div className="container">
      <Header isGameOn={isGameOn} currentPlayer={currentPlayer} />
      <Board
        restartValue={restartValue}
        currentPlayer={currentPlayer}
        swapPlayers={swapPlayers}
        gameOver={gameOver}
      />
      {!isGameOn && <div className="winningMessage">{winningMessage}</div>}
      <RestartButton onClick={restart} />
      <History.Provider value={localStorage}>
        <HistoryTable />
      </History.Provider>
    </div>
  );
};

export default App;
