import React from "react";
import "./Header.css";

const Header = ({isGameOn, currentPlayer}) => {
  return (
    <div className="header">
      <div className="gameTitle">Tic Tac Toe</div>
      {isGameOn && <div className="nowPlaying">Now playing: {currentPlayer}</div>}
    </div>
  );
};

export default Header;