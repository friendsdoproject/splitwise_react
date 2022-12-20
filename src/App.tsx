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
      <div className="content" data-name={theme}>
        <div className="text" data-name={theme}>
          Sign in
        </div>
        <div className="field" data-name={theme}>
          <span className="fa fa-user"></span>
          <input type="text" placeholder="Email Id" data-name={theme} />
        </div>
        <div className="field" data-name={theme}>
          <span className="fa fa-lock"></span>
          <input type="password" data-name={theme} placeholder="Password" />
        </div>
        <button data-name={theme} onClick={() => {}}>
          Log in
        </button>
      </div>
      <div>
        <label className="switch" data-name={theme}>
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider"></span>
          <span className="on">
            <i className="fa fa-moon-o" aria-hidden="true"></i>
          </span>
          <span className="off">
            <i className="fa fa-sun-o" aria-hidden="true"></i>
          </span>
        </label>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
