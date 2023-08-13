import classes from "./About.module.css";
import Container from "../UI/Container";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

export default function About() {
  return (
    <section id="About">
      <Container>
        <h2 className={classes["secondary-heading"]}>About</h2>
        <div className={classes["paragraph"]}>
          Hello! myself <span>SUJAY GOWDA :)</span>
          <br />
          Based on Bangalore, after working as an image editor and graphic
          designer for several years, I have discovered a new passion for web
          development. I am currently in the process of transitioning my career
          and focusing on honing my skills in this exciting field & diving into
          the world of creating awesome web applications.
          <br />
          <span>
            Here are a few technologies I’ve been working with recently:
          </span>
          <br />
          <div className={classes["logo-container"]}>
            <div>
              <FaReact className={classes["logo"]} />
              <p className={classes["logo-title"]}>REACT JS</p>
            </div>
            <div>
              <IoLogoJavascript className={classes["logo"]} />
              <p className={classes["logo-title"]}>
                JAVASCRIPT
                <br />
                ES6+
              </p>
            </div>
            <div>
              <FaCss3Alt className={classes["logo"]} />
              <p className={classes["logo-title"]}>CSS 3</p>
            </div>
            <div className={classes["logo-container-child"]}>
              <FaHtml5 className={classes["logo"]} />
              <p className={classes["logo-title"]}>HTML 5</p>
            </div>
          </div>
        </div>
        <p className={classes["secondary-paragraph"]}>
          Few other skills: Figma, Adobe Photoshop, Adobe Illustrator, Adobe
          Premiere CC.
        </p>
      </Container>
    </section>
  );
}
