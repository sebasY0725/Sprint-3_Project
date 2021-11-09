import { useState } from "react";

import "../src/App.css";

// modo Dark
export default function App() {
  const [DarkMode, setDarkMode] = useState(false);

  const handleChangeTheme = () => {
    setDarkMode(!DarkMode);
  };

  return (
    <div className={`${DarkMode ? "dark" : "light"} App`}>
      <header className="header">
        <h1>Galería de imágenes</h1>
        <button
          className={`${DarkMode ? "dark" : ""} btn-theme`}
          onClick={handleChangeTheme}
        >
          {DarkMode ? "MODO LIGHT" : "MODO DARK"}
        </button>
      </header>
    </div>
  );
}
