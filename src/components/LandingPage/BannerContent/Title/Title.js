import classes from "./Title.module.css";
import { MdOpenInNew } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import file from "../../../../assets/resume/SUJAY_Resume.pdf";

export default function Title() {
  return (
    <div className={classes["title-container"]}>
      <div className={classes["title-content"]}>
        <h3 className={classes["title-tertiary"]}>I'm</h3>
        <h1 className={classes["title-primary"]}>SUJAY GOWDA</h1>
        <h2 className={classes["title-secondary"]}>Web Developer & Designer</h2>
        <p className={classes["title-paragraph"]}>
          Passionate about creating interactive applications and experiences on
          the web.
        </p>
      </div>
      <div className={classes["cta-btns"]}>
        <a href="#Contact">
          <button className={`${classes["btn"]} ${classes["btn-contact"]} `}>
            Contact <RiMessage2Line className={classes["contact-icon"]} />
          </button>
        </a>
        <a href={file} target="_blank" rel="noreferrer">
          <button className={`${classes["btn"]} ${classes["btn-resume"]} `}>
            Resume <MdOpenInNew className={classes["resume-icon"]} />
          </button>
        </a>
      </div>
    </div>
  );
}
