import React,{useContext, useEffect, useState} from 'react';
import './App.css';
import { ThemeContext } from './ThemeChange';

function App() {
  const{theme,toggleTheme}=useContext(ThemeContext)
  useEffect(() => {
    
    document.body.className = theme;
  }, [theme]);
  
  

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme} > Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
    </div>
  );
}

export default App;
