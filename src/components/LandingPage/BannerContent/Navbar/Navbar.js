import { useContext, useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import ThemeContext from "../../../context/ThemeContext";

export default function Navbar() {
  const [isLightMode, setLightMode] = useState(true);

  useEffect(() => {
    const isDarkModeOn = JSON.parse(localStorage.getItem("isDarkModeOn"));
    if (!isDarkModeOn) {
      setLightMode(false);
      value.setLightMode(false);
    }
  }, []);

  const value = useContext(ThemeContext);

  return (
    <div className={classes["nav-container"]}>
      <nav className={classes["nav-bar"]}>
        <ul className={classes["nav-lists"]}>
          <li className={classes["nav-link"]}>
            <a href="#About">About</a>
          </li>
          <li className={classes["nav-link"]}>
            <a href="#Experience">Experience</a>
          </li>
          <li className={classes["nav-link"]}>
            <a href="#Certificates">Certificates</a>
          </li>
          <li className={classes["nav-link"]}>
            <a href="#Projects">Projects</a>
          </li>
        </ul>
      </nav>
      <div
        className={classes["theme-switch"]}
        onClick={() => {
          setLightMode(!isLightMode);
          value.setLightMode(!isLightMode);
          localStorage.setItem("isDarkModeOn", JSON.stringify(!isLightMode));
        }}
      >
        <div
          className={
            isLightMode
              ? `${classes.switch} ${classes["switch-active"]}`
              : classes.switch
          }
        >
          {isLightMode ? (
            <FaSun className={`${classes["icon"]} ${classes["icon-sun"]}`} />
          ) : (
            <FaMoon className={`${classes["icon"]} ${classes["icon-moon"]}`} />
          )}
        </div>
      </div>
    </div>
  );
}
