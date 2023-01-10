import React, { useContext } from "react";
// import { History } from "../App/App";
import { HistoryContext } from "../HistoryContext";
import "./HistoryTable.css";

const HistoryTable = () => {
  const { history } = useContext(HistoryContext);

  function renderHistoryTableData() {
    return history.map(({ winningPlayer, gameDate }) => {
      return (
        <tr>
          <td>{winningPlayer}</td>
          <td>{gameDate}</td>
        </tr>
      );
    });
  }

  return (
    <div className="History">
      {history.length > 0 && (
        <table className="historyTable">
          <tr>
            <th>Winning Player</th>
            <th>Game Date</th>
          </tr>
          {renderHistoryTableData()}
        </table>
      )}
    </div>
  );
};

export default HistoryTable;
