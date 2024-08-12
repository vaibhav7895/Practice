import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [inputTime, setInputTime] = useState("00:05:00");
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const formatTime = (seconds) => {
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (running) {
      const id = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      setIntervalId(id);

      return () => {
        clearInterval(id);
      };
    }
  }, [running]);

  const handleReset = () => {
    setTimer(0);
    setRunning(false);
    if (intervalId) clearInterval(intervalId);
  };

  const toggleRunning = () => {
    if (timer > 0) {
      setRunning(!running);
    }
  };

  const setTimerInput = () => {
    const parts = inputTime.split(":").map(Number);
    if (parts.length === 3) {
      const totalSeconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
      setTimer(totalSeconds);
      setRunning(false);
      if (intervalId) clearInterval(intervalId);
    }
  };

  return (
    <div className="App">
      <h1>{formatTime(timer)}</h1>
      <button onClick={toggleRunning}>{running ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
      <div className="mt-4">
        <input
          type="text"
          placeholder="HH:MM:SS"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
        />
        <button onClick={setTimerInput}>Set Timer</button>
      </div>
    </div>
  );
}

export default App;
