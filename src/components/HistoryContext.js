import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const apiUrl = 'http://localhost:4000';

  const [history, setHistory] = useState([]);

  const addGameToHistory = (gameResult) => {
    setHistory([...history, gameResult]);
  }

  useEffect(() => {
    // getHistoyFromLoaclStorage();
    getHistoyFromApi();
  }, []);
  
  function getHistoyFromLoaclStorage() {
    let storedHistory = JSON.parse(localStorage.getItem("historyFile"));
    storedHistory = storedHistory ? storedHistory : [];
    setHistory(storedHistory);
  }

  function getHistoyFromApi() {
    axios.get(apiUrl)
      .then(res => setHistory(res.data.map(gameResult => gameResult)))
      .catch(err => console.log(`Error while trying to get history games: ${err.message}`));
  }

  useEffect(() => {
    if(history.length > 0) {
      updateHistoryToLocalStorage();
      updateHistoryToApi();
    }
  }, [history]);

  function updateHistoryToLocalStorage() {
    localStorage.setItem("historyFile", JSON.stringify(history));
  }

  function updateHistoryToApi() {
    axios.post(apiUrl, history[history.length - 1])
    .catch(err => console.log(`Error while trying to update history games through api: ${err.message}`));
  }
  
  return (
    <HistoryContext.Provider value={{ history, addGameToHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
