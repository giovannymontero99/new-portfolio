import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

export const ThemeContext = createContext(null);

function App() {
  const [themeDark, setThemeDark] = useState(true);

  const theme = {
    handleTheme: () => setThemeDark(!themeDark),
    themeDark,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
