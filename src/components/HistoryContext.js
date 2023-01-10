import React, { useState, useEffect, createContext } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addGameToHistory = (gameResult) => {
    setHistory([...history, gameResult])
  }

  useEffect(() => {
    let storedHistory = JSON.parse(localStorage.getItem("historyFile"));
    storedHistory = storedHistory ? storedHistory : [];
    setHistory(storedHistory);
  }, []);
  
  useEffect(() => {
    if(history.length > 0) {
      localStorage.setItem("historyFile", JSON.stringify(history));
    }
  }, [history]);
  
  return (
    <HistoryContext.Provider value={{ history, addGameToHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
