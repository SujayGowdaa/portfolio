import Container from "../UI/Container";
import classes from "./Footer.module.css";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={classes["footer-container"]}>
      <section>
        <Container>
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
          <p>
            {/* <MdOutlineDesignServices className={classes["icon"]} /> */}
            Designed & Developed by
            <span className={classes["developer"]}>
              <a
                href="https://www.linkedin.com/in/sujaygowda/"
                target="_blank"
                rel="noreferrer"
              >
                SUJAY GOWDA
              </a>
            </span>
          </p>
        </Container>
      </section>
    </footer>
  );
}
