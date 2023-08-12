import classes from "./App.module.css";
import About from "./components/About/About";
import Certificates from "./components/Certificate/Certificates";
import Experience from "./components/Experience/Experience";
import LandingPage from "./components/LandingPage/LandingPage";
import ThemeContext from "./components/context/ThemeContext";
import { useState } from "react";

function App() {
  const [isLightModeOn, setLightMode] = useState(false);
  const mode = { isLightModeOn, setLightMode };

  return (
    <ThemeContext.Provider value={mode}>
      <div
        className={classes.app}
        theme={mode.isLightModeOn ? "light" : "dark"}
      >
        <LandingPage />
        <About />
        <Experience />
        <Certificates />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
