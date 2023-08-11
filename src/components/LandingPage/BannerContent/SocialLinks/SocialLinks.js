import classes from "./SocialLinks.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className={classes["social-links-container"]}>
      <a
        href="https://www.instagram.com/sujaygowda_/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={classes["social-links-icon"]} />
      </a>
      <a
        href="https://www.linkedin.com/in/sujaygowda//"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn className={classes["social-links-icon"]} />
      </a>
      <a
        href="https://www.behance.net/sujaygowda"
        target="_blank"
        rel="noreferrer"
      >
        <FaBehance className={classes["social-links-icon"]} />
      </a>
    </div>
  );
}
