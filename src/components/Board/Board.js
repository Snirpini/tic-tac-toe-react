import React, { useState, useEffect } from "react";
import Cell from "../Cell/Cell";
import "./Board.css";

const Board = ({ restartValue, currentPlayer, swapPlayers, gameOver }) => {
  useEffect(() => {
    if (restartValue !== 0) {
      restart();
    }
  }, [restartValue]);

  function restart() {
    setCells(Array(9).fill(null));
  }

  const [cells, setCells] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (!cells[i]) {
      let newCells = cells.slice();
      newCells[i] = currentPlayer;
      setCells(newCells);

      const draw = true;
      if (playerHasWon(newCells)) {
        gameOver(!draw);
      } else if (checkDraw(newCells)) {
        gameOver(draw);
      } else {
        swapPlayers();
      }
    }
  }

  function playerHasWon(cells) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      let [a, b, c] = combo;
      if (cells[a] && cells[a] == cells[b] && cells[b] == cells[c]) {
        return true;
      }
    }

    return false;
  }

  function checkDraw(cells) {
    return cells.every((cell) => {
      return cell != null;
    });
  }

  function renderCell(i) {
    return <Cell value={cells[i]} handleClick={() => handleClick(i)} />;
  }

  function renderBoard() {
    const cells = [];
    for (let i = 0; i < 9; i++) {
      cells.push(renderCell(i));
    }

    return cells;
  }

  return <div className="board">{renderBoard()}</div>;
};

export default Board;
