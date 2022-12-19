import { useState } from "react";
import "./App.css";
import { createContext } from "react";
export const ThemeContext = createContext<{}>({});

const App = () => {
  const [theme, setTheme] = useState<string>("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  theme === "dark"
    ? (document.body.style.backgroundColor = "#181818")
    : (document.body.style.backgroundColor = "#dde1e7");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="content" id={theme}>
        <div className="text" id={theme}>
          Sign in
        </div>
        <form>
          <div className="field" id={theme}>
            <span className="fa fa-user"></span>
            <input type="text" placeholder="Email Id" id={theme} />
          </div>
          <div className="field" id={theme}>
            <span className="fa fa-lock"></span>
            <input type="password" id={theme} placeholder="Password" />
          </div>
          <button id={theme}>Log in</button>
        </form>
        <label className="switch" id={theme}>
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider"></span>
          <span className="on">ON</span>
          <span className="off">OFF</span>
        </label>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
