import styles from "./App.module.css";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className={styles.app} theme="light">
      <LandingPage />
    </div>
  );
}
export default App;
