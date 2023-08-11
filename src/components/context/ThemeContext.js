import { createContext } from "react";

const ThemeContext = createContext();

export default function ThemeContext(props) {
  return (
    <ThemeContext.Provider value={{ btnOn: false }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
