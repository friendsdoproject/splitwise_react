import React, { useState } from "react";
import "../components/login.css";
import { createContext } from "react";
export const ThemeContext = createContext<{}>({});

const Login = () => {
  const [theme, setTheme] = useState<string>("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="content" id={theme}>
        <img src="https://lh3.googleusercontent.com/a-/AOh14Gj99VObFyE8W_h8RrcwZO_aYiIHu5AAa_XpnOym=s600-k-no-rp-mo" />
        <div className="text">Sign in</div>
        <form>
          <div className="field">
            <span className="fa fa-user"></span>
            <input type="text" placeholder="Email Id" />
          </div>
          <div className="field">
            <span className="fa fa-lock"></span>
            <input type="password" placeholder="Password" />
          </div>
          <button>Log in</button>
        </form>
      </div>
    </ThemeContext.Provider>
  );
};

export default Login;
