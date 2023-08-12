import classes from "./ScrollToTop.module.css";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  return (
    <div
      className={classes["container-btn"]}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <HiOutlineArrowNarrowUp className={classes["icon"]} />
    </div>
  );
}
