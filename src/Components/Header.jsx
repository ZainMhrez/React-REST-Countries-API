import React, { useContext } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
import ThemeContext from "../Context/ThemeContext";

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <h1>Where in the world?</h1>
        <div className="theme-box">
          <h2 className="theme-switcher" onClick={() => changeTheme(theme)}>
            {theme === "light" ? (
              <BsSun className="theme-icon" />
            ) : (
              <HiOutlineMoon className="theme-icon" />
            )}

            <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
