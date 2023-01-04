import React, { useContext } from "react";
import { History } from "../App/App";
import "./HistoryTable.css";

const HistoryTable = () => {
  const history = useContext(History);

  function renderHistoryTableData() {
    let historyTableBody = [];
    let storedHistory = JSON.parse(history.getItem("historyFile"));
    storedHistory = storedHistory ? storedHistory : [];

    storedHistory.forEach((element) => {
      let row = JSON.parse(element);
      historyTableBody.push(
        <tr>
          <td>{row.winningPlayer}</td>
          <td>{row.gameDate}</td>
        </tr>
      );
    });

    return historyTableBody;
  }
  
  return (
    <div className="History">
      {history.length != 0 && (
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
