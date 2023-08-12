import classes from "./App.module.css";
import About from "./components/About/About";
import Certificates from "./components/Certificate/Certificates";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
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
        <ScrollToTop />
        <LandingPage />
        <About />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
