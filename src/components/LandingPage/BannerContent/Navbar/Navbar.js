import { useState } from "react";
import classes from "./Navbar.module.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

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
        onClick={() => setIsDarkModeOn(!isDarkModeOn)}
      >
        <div
          className={
            isDarkModeOn
              ? classes.switch
              : `${classes.switch} ${classes["switch-active"]}`
          }
        >
          {isDarkModeOn ? (
            <FaMoon className={`${classes["icon"]} ${classes["icon-moon"]}`} />
          ) : (
            <FaSun className={`${classes["icon"]} ${classes["icon-sun"]}`} />
          )}
        </div>
      </div>
    </div>
  );
}
