import React from 'react';
import HistoryProvider from "../HistoryContext";
import Game from "../Game/Game";
import "./App.css";
// import React, { useState, useEffect, useContext } from "react";
// import Board from "../Board/Board";
// import Header from "../Header/Header";
// import RestartButton from "../RestartButton/RestartButton";
// import HistoryTable from "../HistoryTable/HistoryTable";

const App = () => {
  
  return (
    <div>
      <HistoryProvider>
        <Game />
      </HistoryProvider>
    </div>
  );
};

// const App = () => {
//   const O_TEXT = "O";
//   const X_TEXT = "X";
//   const [currentPlayer, setCurrentPlayer] = useState(X_TEXT);
//   const [restartValue, setRestartValue] = useState(0);
//   const [isGameOn, setIsGameOn] = useState(true);
//   const [winningMessage, setWinningMessage] = useState("");

//   function restart() {
//     setRestartValue((current) => current + 1);
//     setCurrentPlayer(X_TEXT);
//     setIsGameOn(true);
//   }

//   function swapPlayers() {
//     setCurrentPlayer(currentPlayer == X_TEXT ? O_TEXT : X_TEXT);
//   }

//   function gameOver(isDraw) {
//     setIsGameOn(false);
//     setWinningMessage(isDraw ? "It's a draw!" : `${currentPlayer} has won!`);
//     saveGameResultToHistory(isDraw);
//   }

//   function saveGameResultToHistory(isDraw) {
//     const today = new Date(Date.now());
//     let gameResult = {winningPlayer: isDraw ? "draw" : currentPlayer, gameDate: today.toDateString()};

//     // contextUpdateFunction(JSON.stringify(gameResult));
//   }

//   return (
//     <div className="container">
//       <div className="leftSide">
//       <Header isGameOn={isGameOn} currentPlayer={currentPlayer} />
//       <Board
//         restartValue={restartValue}
//         currentPlayer={currentPlayer}
//         swapPlayers={swapPlayers}
//         gameOver={gameOver}
//       />
//       {!isGameOn && <div className="winningMessage">{winningMessage}</div>}
//       <RestartButton onClick={restart} />
//       </div>
//       <div className="rightSide">
//       <HistoryProvider>
//         <HistoryTable />
//       </HistoryProvider>
//       </div>
//     </div>
//   );
// };

export default App;