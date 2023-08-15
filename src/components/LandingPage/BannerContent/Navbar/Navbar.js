import { useContext, useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import ThemeContext from "../../../context/ThemeContext";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const [isLightMode, setLightMode] = useState(true);
  const [isMobileNav, setMobileNav] = useState(false);
  const isMobileOn = useMediaQuery({
    query: "(max-width: 800px)",
  });

  useEffect(() => {
    const isDarkModeOn = JSON.parse(localStorage.getItem("isDarkModeOn"));
    if (!isDarkModeOn) {
      setLightMode(false);
      value.setLightMode(false);
    }
  }, []);

  const value = useContext(ThemeContext);

  return (
    <>
      {isMobileOn ? (
        <>
          {!isMobileNav && isMobileOn ? (
            <div className={classes["icon-container"]}>
              <MdMenu
                className={classes["icon-nav"]}
                onClick={() => setMobileNav(isMobileOn)}
              />
            </div>
          ) : (
            <div
              className={
                isMobileNav
                  ? `${classes["icon-container"]} ${classes["icon-container-ative"]} `
                  : classes["icon-container"]
              }
            >
              <MdClose
                className={classes["icon-nav"]}
                onClick={() => setMobileNav(!isMobileOn)}
              />
            </div>
          )}
        </>
      ) : (
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
              localStorage.setItem(
                "isDarkModeOn",
                JSON.stringify(!isLightMode)
              );
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
                <FaSun
                  className={`${classes["icon"]} ${classes["icon-sun"]}`}
                />
              ) : (
                <FaMoon
                  className={`${classes["icon"]} ${classes["icon-moon"]}`}
                />
              )}
            </div>
          </div>
        </div>
      )}
      <>
        {isMobileOn ? (
          <>
            <div
              className={
                !isMobileNav
                  ? classes["nav-container"]
                  : `${classes["nav-container"]} ${classes["active"]}`
              }
            >
              <nav className={classes["nav-bar"]}>
                <ul className={classes["nav-lists"]}>
                  <li className={classes["nav-link"]}>
                    <a href="#" onClick={() => setMobileNav(!isMobileNav)}>
                      Home
                    </a>
                  </li>
                  <li className={classes["nav-link"]}>
                    <a href="#About" onClick={() => setMobileNav(!isMobileNav)}>
                      About
                    </a>
                  </li>
                  <li className={classes["nav-link"]}>
                    <a
                      href="#Experience"
                      onClick={() => setMobileNav(!isMobileNav)}
                    >
                      Experience
                    </a>
                  </li>
                  <li className={classes["nav-link"]}>
                    <a
                      href="#Certificates"
                      onClick={() => setMobileNav(!isMobileNav)}
                    >
                      Certificates
                    </a>
                  </li>
                  <li className={classes["nav-link"]}>
                    <a
                      href="#Projects"
                      onClick={() => setMobileNav(!isMobileNav)}
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </nav>
              <div
                className={classes["theme-switch"]}
                onClick={() => {
                  setLightMode(!isLightMode);
                  value.setLightMode(!isLightMode);
                  localStorage.setItem(
                    "isDarkModeOn",
                    JSON.stringify(!isLightMode)
                  );
                  setTimeout(function () {
                    setMobileNav(!isMobileNav);
                    console.log("hello");
                  }, 400);
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
                    <FaSun
                      className={`${classes["icon"]} ${classes["icon-sun"]}`}
                    />
                  ) : (
                    <FaMoon
                      className={`${classes["icon"]} ${classes["icon-moon"]}`}
                    />
                  )}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    </>
  );
}
